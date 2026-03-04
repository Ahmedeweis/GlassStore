<template>
    <div class="shipping-info-summary">
        <h3 class="text-sm font-medium text-gray-500 mb-4 tracking-normal">Shipping Information</h3>

        <div class="border border-gray-100 rounded-2xl p-6 lg:p-8 space-y-3">

            <!-- User Address Details -->
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">Name</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">hamida
                    jannat</span>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">Country</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">United
                    States</span>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">Address</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">Ap #867-859
                    Sit Rd.</span>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">City</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">New
                    York</span>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">State/Region</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">NY</span>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">Zip/Postal</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">39531</span>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm pb-6 border-b border-gray-100">
                <span class="text-gray-400">Phone</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">(XXX)
                    XXX-XXXX</span>
            </div>

            <!-- Shipping Company Details -->
            <div class="pt-4 grid grid-cols-[120px_1fr_auto] gap-4 text-sm items-center">
                <span class="text-gray-400">Company</span>
                <span
                    class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max self-end">DHL</span>
                <!-- Placeholder DHL text using user preference -->
                <div class="text-red-600 font-bold italic text-lg opacity-90">nano bananbro</div>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">Est. Delivery Time</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">Oct 31 - Nov
                    10</span>
            </div>
            <div class="grid grid-cols-[120px_1fr] gap-4 text-sm">
                <span class="text-gray-400">Shipping Cost</span>
                <span class="text-gray-900 font-medium border-b border-dashed border-gray-200 pb-1 w-max">$0</span>
            </div>

        </div>
    </div>
</template>

<script setup>
</script>
