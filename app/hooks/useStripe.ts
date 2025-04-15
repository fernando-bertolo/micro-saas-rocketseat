import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";

export function useStripe() {
    const [stripe, setStripe] = useState<Stripe | null>(null);

    useEffect(() => {
        async function loadStripeAsync() {
            if (!process.env.NEXT_PUBLIC_STRIPE_PUB_KEY) {
                throw new Error("NEXT_PUBLIC_STRIPE_PUB_KEY is not defined");
            }

            const stripeInstance = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY);
            setStripe(stripeInstance);
        }

        loadStripeAsync();
    }, []);
}