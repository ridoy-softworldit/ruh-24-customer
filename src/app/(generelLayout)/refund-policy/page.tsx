export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Refund Policy</h1>
      
      <div className="prose prose-sm sm:prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Refund Eligibility</h2>
          <p>Refunds are issued for:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Defective or damaged products</li>
            <li>Wrong items delivered</li>
            <li>Cancelled orders before shipment</li>
            <li>Approved returns within the return period</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Refund Processing Time</h2>
          <p>Once your return is received and inspected, we will process your refund within:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Cash on Delivery: 7-10 business days via bank transfer</li>
            <li>Online Payment (bKash/Nagad/Rocket): 5-7 business days</li>
            <li>Card Payment: 7-14 business days (depending on your bank)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Refund Method</h2>
          <p>Refunds will be issued to the original payment method. For cash on delivery orders, refunds will be processed via bank transfer or mobile banking to your provided account.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Partial Refunds</h2>
          <p>Partial refunds may be granted for:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Items with obvious signs of use</li>
            <li>Items not in original condition or missing parts</li>
            <li>Items returned more than 7 days after delivery</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Non-Refundable Items</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Delivery charges (unless the return is due to our error)</li>
            <li>Gift cards or vouchers</li>
            <li>Downloadable digital products</li>
            <li>Items marked as non-refundable at the time of purchase</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Order Cancellation</h2>
          <p>You can cancel your order before it is shipped for a full refund. Once shipped, you must follow the return process.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Refund Notification</h2>
          <p>You will receive an email notification once your refund has been processed. Please allow additional time for the refund to reflect in your account.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Delayed or Missing Refunds</h2>
          <p>If you haven&apos;t received your refund within the specified timeframe:</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>Check your bank account or payment method again</li>
            <li>Contact your bank or payment provider</li>
            <li>If still not received, contact our customer service</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact for Refunds</h2>
          <p>For refund inquiries or issues, please contact our customer service team through the contact page.</p>
        </section>
      </div>
    </div>
  );
}
