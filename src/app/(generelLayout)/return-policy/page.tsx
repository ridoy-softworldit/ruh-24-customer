export default function ReturnPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Return Policy</h1>
      
      <div className="prose prose-sm sm:prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Return Period</h2>
          <p>You may return most items within 7 days of delivery for a full refund or exchange. The item must be unused and in its original packaging.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Eligible Items for Return</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Defective or damaged products</li>
            <li>Wrong items delivered</li>
            <li>Items not matching the description</li>
            <li>Unused items in original condition and packaging</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Non-Returnable Items</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Opened or used books, electronics, or personal care items</li>
            <li>Items without original packaging or tags</li>
            <li>Customized or personalized products</li>
            <li>Sale or clearance items (unless defective)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Return Process</h2>
          <p>To initiate a return:</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>Contact our customer service within 7 days of delivery</li>
            <li>Provide your order number and reason for return</li>
            <li>Pack the item securely in its original packaging</li>
            <li>Our delivery partner will collect the item from your address</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Inspection</h2>
          <p>Once we receive your return, we will inspect the item and notify you of the approval or rejection of your return.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Return Shipping</h2>
          <p>Return shipping is free for defective or incorrect items. For other returns, shipping charges may apply.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Exchanges</h2>
          <p>We accept exchanges for the same item in a different size, color, or variant, subject to availability.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contact for Returns</h2>
          <p>For return requests or questions, please contact our customer service through the contact page or call our support line.</p>
        </section>
      </div>
    </div>
  );
}
