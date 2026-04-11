import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function MemberCard({ member }: { member: any }) {
  return (
    <div className="reference-member-card">
      <div className="rmc-image-wrapper">
        {member.entry.image ? (
          <Image src={member.entry.image} alt={member.entry.name} fill className="rmc-img" />
        ) : (
          <div className="rmc-placeholder">{member.entry.name[0]}</div>
        )}
      </div>

      <div className="rmc-content">
        <h3>{member.entry.name}</h3>
        {member.entry.role && <p className="rmc-role">{member.entry.role}</p>}
      </div>

      <div className="rmc-divider"></div>

      <div className="rmc-socials">
        {member.entry.whatsapp && (
          <a href={member.entry.whatsapp} target="_blank" rel="noreferrer" className="rmc-icon-btn wa" aria-label="WhatsApp">
            <FaWhatsapp size={18} />
          </a>
        )}
        {member.entry.facebook && (
          <a href={member.entry.facebook} target="_blank" rel="noreferrer" className="rmc-icon-btn fb" aria-label="Facebook">
            <FaFacebookF size={16} />
          </a>
        )}
        {member.entry.instagram && (
          <a href={member.entry.instagram} target="_blank" rel="noreferrer" className="rmc-icon-btn ig" aria-label="Instagram">
            <FaInstagram size={18} />
          </a>
        )}
        {member.entry.twitter && (
          <a href={member.entry.twitter} target="_blank" rel="noreferrer" className="rmc-icon-btn tw" aria-label="Twitter">
            <FaTwitter size={16} />
          </a>
        )}
        {member.entry.linkedin && (
          <a href={member.entry.linkedin} target="_blank" rel="noreferrer" className="rmc-icon-btn in" aria-label="LinkedIn">
            <FaLinkedinIn size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
