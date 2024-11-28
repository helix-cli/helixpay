import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const body = await request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: "https://mockops.vercel.app/success",
      cancel_url: "https://mockops.vercel.app/",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: body.title,
              images: [
                "https://www.dropbox.com/scl/fi/udyevxd014lkdtbippn6a/slide-1.jpg?rlkey=uc8f9d55pxleucrfvwz54tmx0&st=60h3zf7e&raw=1",
              ],
            },
            unit_amount: body.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
    });

    return NextResponse.json(session);
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
