const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-serif mb-6">Contact Us</h1>

      <p className="text-muted-foreground mb-4">
        If you have any questions, concerns, or issues related to payments or
        donations, please contact us.
      </p>

      <p className="mb-2">
        <strong>Email:</strong> support@buymeacoffee.com
      </p>

      <p className="mb-2">
        <strong>Website:</strong>{" "}
        https://buy-mea-coffee-cashfree.vercel.app
      </p>

      <p className="text-sm text-muted-foreground mt-6">
        We aim to respond within 24–48 hours.
      </p>
    </div>
  );
};

export default Contact;
