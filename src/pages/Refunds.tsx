const Refunds = () => {
  return (
    <div className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-serif mb-6">
        Refund & Cancellation Policy
      </h1>

      <p className="text-muted-foreground mb-4">
        Payments made on this website are voluntary donations and are generally
        non-refundable.
      </p>

      <p className="text-muted-foreground mb-4">
        In case of duplicate payment, technical issues, or accidental
        transactions, users may request a refund within 48 hours.
      </p>

      <p className="text-muted-foreground mb-4">
        Refunds are processed on a case-by-case basis.
      </p>

      <p>
        Contact us at: <strong>support@buymeacoffee.com</strong>
      </p>
    </div>
  );
};

export default Refunds;
