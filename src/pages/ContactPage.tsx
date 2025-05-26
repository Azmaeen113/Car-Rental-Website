import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    carInterest: '',
    message: '',
    emailMethod: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject || !formData.message.trim() || !formData.emailMethod) {
      alert('Please fill in all required fields including email provider selection.');
      return;
    }

    // Prepare email data
    const recipient = "Booking@RichRentalsLA.com";
    const fullSubject = encodeURIComponent(`${formData.subject} - From ${formData.name}`);
    const fullBody = encodeURIComponent(
      `Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone || "N/A"}
Vehicle of Interest: ${formData.carInterest || "N/A"}

Message:
${formData.message}`
    );

    // Generate URL based on selected email provider
    let url = "";

    switch (formData.emailMethod) {
      case "Gmail":
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${fullSubject}&body=${fullBody}`;
        break;
      case "Outlook":
        url = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${recipient}&subject=${fullSubject}&body=${fullBody}`;
        break;
      case "Yahoo":
        url = `https://compose.mail.yahoo.com/?to=${recipient}&subject=${fullSubject}&body=${fullBody}`;
        break;
      case "iCloud":
        // iCloud webmail doesn't support prefilled email links, fallback to mailto
        url = `mailto:${recipient}?subject=${fullSubject}&body=${fullBody}`;
        break;
      case "AOL":
        // AOL also doesn't support direct compose with body; fallback
        url = `mailto:${recipient}?subject=${fullSubject}&body=${fullBody}`;
        break;
      case "Default":
        url = `mailto:${recipient}?subject=${fullSubject}&body=${fullBody}`;
        break;
      default:
        alert("Please select a valid email provider.");
        return;
    }

    // Open email client
    window.open(url, '_blank');

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        carInterest: '',
        message: '',
        emailMethod: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience luxury? Get in touch with our team and let us help you
            find the perfect vehicle for your next adventure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're here to help you experience the thrill of luxury driving.
                Contact us today to learn more about our exclusive fleet and personalized service.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Visit Our Location</h3>
                  <p className="text-gray-300">8549 Wilshire Blvd</p>
                  <p className="text-gray-300">Beverly Hills CA 90211</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call or Text</h3>
                  <a href="tel:+18184540977" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    (818) 454-0977
                  </a>
                  <p className="text-gray-300 text-sm">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <a href="mailto:Booking@RichRentalsLA.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Booking@RichRentalsLA.com
                  </a>
                  <p className="text-gray-300 text-sm">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-300">10:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">7 Days a Week</p>
                  <p className="text-yellow-400 text-sm">Extended hours available by appointment</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-yellow-400/20">
              <h3 className="text-white font-semibold mb-4">Find Us</h3>
              <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <p className="text-gray-300">Interactive Map</p>
                  <p className="text-gray-400 text-sm">8549 Wilshire Blvd, Beverly Hills CA 90211</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-400/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Client Opened!</h3>
                <p className="text-gray-300">
                  Your message has been prepared in your selected email provider. Please review and send it to complete your inquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Vehicle Booking</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="availability">Availability Check</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Car Interest */}
                <div>
                  <label htmlFor="carInterest" className="block text-white font-medium mb-2">
                    Vehicle of Interest
                  </label>
                  <select
                    id="carInterest"
                    name="carInterest"
                    value={formData.carInterest}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a vehicle (optional)</option>
                    <option value="lamborghini-huracan">Lamborghini Huracán EVO</option>
                    <option value="ferrari-488">Ferrari 488 GTB</option>
                    <option value="mclaren-720s">McLaren 720S</option>
                    <option value="porsche-911">Porsche 911 Turbo S</option>
                    <option value="bentley-continental">Bentley Continental GT</option>
                    <option value="aston-martin-db11">Aston Martin DB11</option>
                    <option value="other">Other/Multiple</option>
                  </select>
                </div>

                {/* Email Provider Selection */}
                <div>
                  <label htmlFor="emailMethod" className="block text-white font-medium mb-2">
                    Send Email Using *
                  </label>
                  <select
                    id="emailMethod"
                    name="emailMethod"
                    required
                    value={formData.emailMethod}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select an email provider</option>
                    <option value="Gmail">Gmail</option>
                    <option value="Outlook">Outlook / Hotmail / MSN</option>
                    <option value="Yahoo">Yahoo Mail</option>
                    <option value="iCloud">Apple iCloud Mail</option>
                    <option value="AOL">AOL Mail</option>
                    <option value="Default">Default Email App</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your rental needs, preferred dates, special requirements, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-gray-400 text-sm text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Don't wait any longer. Contact us now and let us help you create
            an unforgettable driving experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18184540977"
              className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (818) 454-0977</span>
            </a>
            <a
              href="mailto:Booking@RichRentalsLA.com"
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
