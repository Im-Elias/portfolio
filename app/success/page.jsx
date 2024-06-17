import Link from "next/link";

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="section-title mb-8">¡El email fue enviado!</h1>
      <p className="subtitle mb-4 text-center">
        Gracias por contactarme. Te responderé lo antes posible.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default Contact;
