import { getContactData } from "@/lib/keystatic";
import "./contact.css";

export default async function Contact() {
  const data = await getContactData();

  return (
    <div className="contact-page">
      <div className="page-header decoration-bg">
        <div className="container">

          <h1><span className="text-gradient">{data?.title || 'Contact Us'}</span></h1>
          <p>{data?.description || "Reach out to the batch representatives or submit a memory."}</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          {/* Contact Details Pane */}
          <div className="contact-info">
            <h2 className="section-title">Directory Info</h2>
            <div className="info-cards">
              <div className="glass-panel info-card">
                <div className="icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>{data?.email}</p>
                </div>
              </div>
              <div className="glass-panel info-card">
                <div className="icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>{data?.phone}</p>
                </div>
              </div>
              <div className="glass-panel info-card">
                <div className="icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>{data?.address}</p>
                </div>
              </div>
              {data?.facebookUrl && (
                <div className="glass-panel info-card">
                  <div className="icon">👥</div>
                  <div>
                    <h4>Facebook Group</h4>
                    <a href={data.facebookUrl} target="_blank" rel="noreferrer" className="btn btn-secondary mt-2">
                      Join Group
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submission Form Pane */}
          <div className="glass-panel submission-form">
            <h2 className="section-title">{data?.formTitle || "Submit a Memory"}</h2>
            <p className="form-description">{data?.formDescription || "Send us an update, a photo, or an event idea to be featured."}</p>
            
            <form className="modern-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Message / Details</label>
                <textarea className="form-input" rows={5} placeholder="What's on your mind?"></textarea>
              </div>
              <button type="button" className="btn btn-primary form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
