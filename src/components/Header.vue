<template>
    <div
        class="w-full bg-dacxi-blue px-5 h-17 flex justify-between align-center mb-10 mb-sm-0"
        data-testid="dacxi-header"
    >
        <img
            src="../assets/dacxi-logo.png"
            alt="dacxi-logo"
            class="py-2 w-20 sm:w-64"
            data-testid="dacxi-logo"
        />
        <span class="white--text text-smaller text-sm-subtitle-2"
            >Application data provided by:
            <a
                href="https://www.coingecko.com/en/api/documentation"
                target="_blank"
                class="font-weight-bold hover:underline transition"
                data-testid="coingecko-link"
                >CoinGecko Crypto Api</a
            ></span
        >
    </div>
</template>
