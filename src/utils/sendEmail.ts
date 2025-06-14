import emailjs from "@emailjs/browser";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const serviceId = "default_service"; // ✅ same as test
  const templateId = "template_3klqraa"; // ✅ same as test
  const publicKey = "BXl3QKlkS85YLXlDJ";

  const templateParams = {
    name,
    email,
    message,
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return response;
  } catch (error) {
    console.error("EmailJS error:", error);
    throw error;
  }
};
