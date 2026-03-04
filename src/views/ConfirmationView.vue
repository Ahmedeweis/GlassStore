<template>
  <div class="min-h-screen bg-[#f8f9fc] font-sans pb-20">
    <Header />

    <div class="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-24 lg:pt-32">
      
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 xl:gap-12 items-start">
        
        <!-- LEFT COLUMN -->
        <div class="flex flex-col gap-10">
          
          <!-- ORDER SECTION -->
          <section>
            <h2 class="text-[22px] font-bold text-[#2d3748] mb-6">Order</h2>
            
            <div class="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 md:p-8 relative overflow-hidden">
              <!-- Sale Banner Ribbon -->
              <div class="absolute -top-1 -right-1 z-10">
                <div class="relative w-[120px] h-[120px] overflow-hidden">
                  <div class="absolute top-[26px] -right-[26px] w-[170px] bg-[#fb385a] text-white text-[11px] font-bold tracking-wider uppercase py-2 text-center transform rotate-45 shadow-md">
                    Sale Time!
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-6">
                
                <!-- Product 1 -->
                <div class="flex items-center gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 relative">
                  <div class="w-[84px] h-[100px] bg-gray-50 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="/images/red_pants.png" alt="Air Red Pants" class="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  
                  <div class="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex flex-col">
                      <h3 class="font-bold text-[#2d3748] text-[15px] mb-1">Air Red Pants</h3>
                      <div class="text-[13px] text-[#718096] mb-0.5"><span class="font-medium mr-1">Color:</span> Red/White</div>
                      <div class="text-[13px] text-[#718096]"><span class="font-medium mr-1">Size:</span> <span class="font-bold text-[#4a5568]">L</span></div>
                    </div>
                    
                    <div class="flex items-center gap-6 sm:gap-10">
                      <div class="flex items-center gap-2">
                        <span class="text-[15px] font-bold text-[#fb385a]">$45.00</span>
                        <span class="text-[14px] font-medium text-[#a0aec0] line-through">$55.00</span>
                      </div>
                      
                      <div class="flex items-center gap-4">
                        <div class="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-10 w-24 justify-between">
                          <span class="text-[13px] text-[#718096]">Quantity:</span>
                          <div class="flex items-center gap-2">
                            <span class="font-bold text-[#2d3748] text-[14px]">1</span>
                            <div class="flex flex-col">
                              <button class="text-[#a0aec0] hover:text-[#4a5568]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg></button>
                              <button class="text-[#a0aec0] hover:text-[#4a5568]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>
                            </div>
                          </div>
                        </div>
                        <div class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold text-[#4a5568] text-[14px] bg-white">L</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Product 2 -->
                <div class="flex items-center gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div class="w-[84px] h-[100px] bg-gray-50 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="/images/navy_tshirt.png" alt="Court Dri-FIT" class="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  
                  <div class="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 mb-1">
                        <h3 class="font-bold text-[#2d3748] text-[15px]">Court Dri-FIT</h3>
                        <!-- Leaf SVG -->
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-[#48bb78]/20"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                      </div>
                      <div class="text-[13px] text-[#718096] mb-0.5"><span class="font-medium mr-1">Color:</span> Dark Blue</div>
                      <div class="text-[13px] text-[#718096]"><span class="font-medium mr-1">Size:</span> <span class="font-bold text-[#4a5568]">L</span></div>
                    </div>
                    
                    <div class="flex items-center gap-6 sm:gap-10">
                      <div class="flex items-center gap-2">
                        <span class="text-[15px] font-bold text-[#fb385a]">$22.00</span>
                        <span class="text-[14px] font-medium text-[#a0aec0] line-through">$26.00</span>
                      </div>
                      
                      <div class="flex items-center gap-4">
                        <div class="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-10 w-24 justify-between">
                          <span class="text-[13px] text-[#718096]">Quantity:</span>
                          <div class="flex items-center gap-2">
                            <span class="font-bold text-[#2d3748] text-[14px]">1</span>
                            <div class="flex flex-col">
                              <button class="text-[#a0aec0] hover:text-[#4a5568]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg></button>
                              <button class="text-[#a0aec0] hover:text-[#4a5568]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>
                            </div>
                          </div>
                        </div>
                        <div class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold text-[#4a5568] text-[14px] bg-white">L</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Product 3 -->
                <div class="flex items-center gap-6 pb-2">
                  <div class="w-[84px] h-[100px] bg-gray-50 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="/images/blue_jacket.png" alt="Sportswear Heritage Windrunner" class="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  
                  <div class="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex flex-col pr-4">
                      <h3 class="font-bold text-[#2d3748] text-[15px] mb-1">Sportswear Heritage Windrunner</h3>
                      <div class="text-[13px] text-[#718096] mb-0.5"><span class="font-medium mr-1">Color:</span> Blue/White</div>
                      <div class="text-[13px] text-[#718096]"><span class="font-medium mr-1">Size:</span> <span class="font-bold text-[#4a5568]">L</span></div>
                    </div>
                    
                    <div class="flex items-center gap-6 sm:gap-10 shrink-0">
                      <div class="flex items-center gap-2">
                        <span class="text-[15px] font-bold text-[#2d3748]">$55.00</span>
                      </div>
                      
                      <div class="flex items-center gap-4">
                        <div class="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-10 w-24 justify-between">
                          <span class="text-[13px] text-[#718096]">Quantity:</span>
                          <div class="flex items-center gap-2">
                            <span class="font-bold text-[#2d3748] text-[14px]">1</span>
                            <div class="flex flex-col">
                              <button class="text-[#a0aec0] hover:text-[#4a5568]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg></button>
                              <button class="text-[#a0aec0] hover:text-[#4a5568]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>
                            </div>
                          </div>
                        </div>
                        <div class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold text-[#4a5568] text-[14px] bg-white">L</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- DELIVERY SECTION -->
          <section>
            <h2 class="text-[22px] font-bold text-[#2d3748] mb-6">Delivery</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              
              <!-- Delivery Card 1 -->
              <div class="relative bg-white rounded-[16px] border-2 border-[#1e88e5] p-5 shadow-[0_4px_12px_rgba(30,136,229,0.1)] flex items-center gap-4 cursor-pointer">
                <!-- Checkmark Checkbox -->
                <div class="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#1e88e5] flex items-center justify-center shadow-sm">
                  <div class="w-3 h-3 rounded-full bg-[#1e88e5]"></div>
                </div>
                
                <div class="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center ml-2 border border-gray-100 shrink-0">
                  <span class="text-red-600 font-extrabold text-[18px] tracking-tighter">dpd</span>
                </div>
                
                <div class="flex-1">
                  <h4 class="font-bold text-[#2d3748] text-[14px]">DPD Deliveries</h4>
                  <p class="text-[13px] text-[#a0aec0] mt-0.5 leading-snug">Expected delivery:<br/>Friday, 28</p>
                </div>
                
                <div class="font-bold text-[#2d3748] text-[15px]">$5.25</div>
              </div>

              <!-- Delivery Card 2 -->
              <div class="relative bg-white rounded-[16px] border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-4 cursor-pointer hover:border-gray-200 transition-colors">
                <div class="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"></div>
                
                <div class="w-14 h-14 rounded-lg flex items-center justify-center ml-2 shrink-0">
                   <!-- FedEx Text Logo approximation -->
                   <div class="flex items-baseline font-bold text-[18px] tracking-tighter"><span class="text-[#4d148c]">Fed</span><span class="text-[#ff6600]">Ex</span></div>
                </div>
                
                <div class="flex-1">
                  <h4 class="font-bold text-[#2d3748] text-[14px]">FedEx Fast Delivery</h4>
                  <p class="text-[13px] text-[#a0aec0] mt-0.5 leading-snug">Expected delivery:<br/>Friday, 28</p>
                </div>
                
                <div class="font-bold text-[#2d3748] text-[15px]">$7.25</div>
              </div>

               <!-- Delivery Card 3 -->
               <div class="relative bg-white rounded-[16px] border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-4 cursor-pointer hover:border-gray-200 transition-colors">
                <div class="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"></div>
                
                <div class="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center ml-2 border border-gray-100 shrink-0">
                   <!-- UPS Shield approximation -->
                   <div class="w-8 h-9 bg-yellow-600 rounded-sm relative flex items-center justify-center">
                     <span class="text-white text-[10px] font-bold">ups</span>
                   </div>
                </div>
                
                <div class="flex-1">
                  <h4 class="font-bold text-[#2d3748] text-[14px]">UPS Deliveries</h4>
                  <p class="text-[13px] text-[#a0aec0] mt-0.5 leading-snug">Expected delivery:<br/>Friday, 28</p>
                </div>
                
                <div class="font-bold text-[#2d3748] text-[15px]">$5.50</div>
              </div>

              <!-- Delivery Card 4 -->
              <div class="relative bg-white rounded-[16px] border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-4 cursor-pointer hover:border-gray-200 transition-colors">
                <div class="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"></div>
                
                <div class="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center ml-2 border border-gray-100 shrink-0">
                   <!-- Box Icon -->
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-amber-600 stroke-amber-700" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
                     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                     <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                     <line x1="12" y1="22.08" x2="12" y2="12"></line>
                   </svg>
                </div>
                
                <div class="flex-1">
                  <h4 class="font-bold text-[#2d3748] text-[14px]">Collect in person</h4>
                  <p class="text-[13px] text-[#a0aec0] mt-0.5 leading-snug">Expected collection:<br/>Thursday, 27</p>
                </div>
                
                <div class="font-bold text-[#2d3748] text-[15px]">Free</div>
              </div>

            </div>
          </section>

          <!-- PAYMENT SECTION -->
          <section>
            <h2 class="text-[22px] font-bold text-[#2d3748] mb-6">Payment</h2>
            
            <div class="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 md:p-8">
               <h3 class="font-bold text-[#2d3748] text-[15px] mb-4">Personal Informations</h3>
               <!-- Form placeholders could go here -->
               <div class="h-20 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">Form hidden per image reference crop</div>
            </div>
          </section>

        </div>


        <!-- RIGHT COLUMN -->
        <div class="flex flex-col gap-10">
          
          <!-- PAYMENT SUMMARY SECTION -->
          <section>
            <h2 class="text-[22px] font-bold text-[#2d3748] mb-6">Payment Summary</h2>
            
            <div class="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 md:p-8">
                
                <!-- Unregistered Account Banner -->
                <div class="bg-[#f8f9fc] rounded-lg py-3 flex items-center justify-center font-bold text-[12px] text-[#718096] tracking-wider mb-6 border border-gray-100">
                    UNREGISTERED ACCOUNT
                </div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-[13px] font-medium text-[#a0aec0]">Transaction code</span>
                  <span class="text-[14px] font-bold text-[#2d3748]">VC11566S</span>
                </div>
                
                <div class="flex gap-2 mb-8">
                  <input type="text" placeholder="COUPON CODE" class="flex-1 bg-[#f8f9fc] border border-gray-100 rounded-lg px-4 text-[13px] font-semibold text-gray-800 focus:outline-none focus:border-blue-300 placeholder-gray-400" />
                  <button class="bg-[#e4f0fe] text-[#1e88e5] px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#d0e5fb] transition-colors">Apply</button>
                </div>

                <div class="border-t border-dashed border-gray-200 pt-6 flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="text-[14px] font-medium text-[#718096]">Order Summary</span>
                    <span class="text-[15px] font-bold text-[#2d3748]">$122</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-[14px] font-medium text-[#718096]">Additional Service</span>
                    <span class="text-[15px] font-bold text-[#1e88e5]">$10</span>
                  </div>
                  <div class="flex items-center justify-between pt-2">
                    <span class="text-[14px] font-medium text-[#718096]">Total Amount</span>
                    <span class="text-[16px] font-bold text-[#2d3748]">$132</span>
                  </div>
                </div>

                <div class="mt-8 bg-[#fff0f2] rounded-lg py-3 flex items-center justify-center text-[12px] font-bold tracking-wide">
                  <span class="text-[#a0aec0] mr-1">SALE EXPIRING IN:</span> <span class="text-[#fb385a]">21 HOURS, 31 MINUTES</span>
                </div>
            </div>
          </section>

          <!-- ADDITIONAL SERVICE SECTION -->
          <section>
            <h2 class="text-[22px] font-bold text-[#2d3748] mb-6">Additional Service</h2>
            
            <div class="flex flex-col gap-4">
              
              <!-- Service 1 -->
              <div class="bg-white rounded-[16px] border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-[#2d3748] text-[14px] mb-0.5">Care+ Package</h4>
                  <p class="text-[12px] text-[#a0aec0] font-medium">One year of additional care</p>
                </div>
                <div class="flex items-center gap-4">
                  <span class="font-bold text-[#2d3748] text-[14px]">$10.00</span>
                  <!-- Toggle Active -->
                  <div class="w-[36px] h-[20px] bg-[#e4f0fe] rounded-full relative cursor-pointer">
                    <div class="absolute right-[2px] top-[2px] w-[16px] h-[16px] bg-[#1e88e5] rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              <!-- Service 2 -->
              <div class="bg-white rounded-[16px] border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-[#2d3748] text-[14px] mb-0.5">Environment Friendly</h4>
                  <p class="text-[12px] text-[#a0aec0] font-medium">Add some tip for earth care</p>
                </div>
                <div class="flex items-center gap-4">
                  <span class="font-bold text-[#2d3748] text-[14px]">$2.00</span>
                  <!-- Toggle Inactive -->
                  <div class="w-[36px] h-[20px] bg-gray-200 rounded-full relative cursor-pointer">
                    <div class="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

               <!-- Service 3 -->
               <div class="bg-white rounded-[16px] border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-[#2d3748] text-[14px] mb-0.5">Golden Guard</h4>
                  <p class="text-[12px] text-[#a0aec0] font-medium">30 days more for return</p>
                </div>
                <div class="flex items-center gap-4">
                  <span class="font-bold text-[#2d3748] text-[14px]">$5.00</span>
                  <!-- Toggle Inactive -->
                  <div class="w-[36px] h-[20px] bg-gray-200 rounded-full relative cursor-pointer">
                    <div class="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
</script>

<style scoped>
/* Optional specific overrides */
</style>
