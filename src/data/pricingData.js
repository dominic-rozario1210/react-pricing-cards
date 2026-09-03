const pricingPlans = [
    {
        id: 1,
        title: "FREE",
        price: "$0/month",
        highlight: false,
        features: [
            { text: "Single user", available: true },
            { text: "50GB Storage", available: true },
            { text: "Unlimited Public Projects", available: true },
            { text: "Community Access", available: true },
            { text: "Unlimited Private Projects", available: false },
            { text: "Dedicated Phone Support", available: false },
            { text: "Free subdomain", available: false },
            { text: "Monthly Status Support", available: false }
        ]
    },
    {
        id: 2,
        title: "PLUS",
        price: "$9/month",
        highlight: false,
        features: [
            { text: "Single user", available: true },
            { text: "50GB Storage", available: true },
            { text: "Unlimited Public Projects", available: true },
            { text: "Community Access", available: true },
            { text: "Unlimited Private Projects", available: true },
            { text: "Dedicated Phone Support", available: true },
            { text: "Free subdomain", available: true },
            { text: "Monthly Status Support", available: false }
        ]
    },
    {
        id: 3,
        title: "PRO",
        price: "$49/month",
        highlight: true,
        features: [
            { text: "Single user", available: true },
            { text: "50GB Storage", available: true },
            { text: "Unlimited Public Projects", available: true },
            { text: "Community Access", available: true },
            { text: "Unlimited Private Projects", available: true },
            { text: "Dedicated Phone Support", available: true },
            { text: "Free subdomain", available: true },
            { text: "Monthly Status Support", available: true }
        ]
    }
];


export default pricingPlans;

