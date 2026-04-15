import { getHomepageData, getMembers, getGallery } from "@/lib/keystatic";
import Image from "next/image";
import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import GalleryGrid from "@/components/GalleryGrid";
import './home.css';
import './members/members.css';
import './gallery/gallery.css';

export default async function Home() {
  const data = await getHomepageData();
  const membersData = await getMembers();
  const galleryData = await getGallery();

  // Fallback defaults if keystatic arrays are empty
  const defaultStats = [
    { number: "10+", label: "Years" },
    { number: "300+", label: "Members" },
    { number: "Infinite", label: "Memories" }
  ];

  const defaultFeatures = [
    { icon: "📖", title: "Our Journey", description: "Read about the history that shaped our batch and the milestones we share.", linkText: "Read More", linkHref: "/about" },
    { icon: "🎓", title: "The Directory", description: "Find old friends, see what everyone is up to, and connect directly.", linkText: "Explore Now", linkHref: "/members" },
    { icon: "📸", title: "Moments", description: "A curated collection of our best memories from school to current reunions.", linkText: "View Gallery", linkHref: "/gallery" }
  ];

  const stats = (data?.stats && data.stats.length > 0) ? data.stats : defaultStats;
  const features = (data?.features && data.features.length > 0) ? data.features : defaultFeatures;

  const recentMembers = membersData.filter(m => m.entry.showOnHomepage).slice(0, 8);
  const recentGallery = galleryData.filter(g => g.entry.showOnHomepage).slice(0, 8);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-background-effects">
          <div className="decoration-orb orb-1"></div>
          <div className="decoration-orb orb-2"></div>
          <div className="grid-pattern"></div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <h1>
              <span className="text-gradient">{data?.heroTitle || "Batch '11"}</span> 
              <br /> {data?.heroTitleExtended || "Legacy & Legends."}
            </h1>
            <p className="hero-subtitle">
              {data?.heroSubtitle || "Connecting our past, inspiring our future. Welcome to the official platform."}
            </p>
            <div className="hero-actions">
              <Link href="/members" className="btn btn-primary">
                Explore Directory
              </Link>
              <Link href="/gallery" className="btn btn-secondary">
                View Gallery
              </Link>
            </div>
            
            <div className="stats-row">
              {stats.map((stat, i) => (
                <div key={i} className="stat glass">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="image-wrapper glass-panel">
              {data?.heroImage ? (
                <Image 
                  src={data.heroImage} 
                  alt="Batch photo" 
                  fill 
                  className="hero-image"
                  priority
                />
              ) : (
                <div className="hero-image placeholder" />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-divider" />
      
      <section className="history-section container">
        <div className="glass-panel history-grid">
          <div className="history-text-col">
            <div className="decoration-orb orb-1" style={{ width: '150px', height: '150px', top: '-50px', left: '-50px', opacity: 0.3 }}></div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: "'Outfit', sans-serif", marginBottom: '1.5rem' }}>
              <span className="text-gradient">{data?.historyTitle || "Our Legacy"}</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              {data?.historyContent || "Founded in the heart of our community, our school has built a tradition of excellence, shaping the minds of thousands of students who went on to become legends in their fields. Batch '11 remains one of the most distinguished chapters of this history."}
            </p>
          </div>
          <div className="history-img-col">
            {data?.historyImage ? (
              <Image src={data.historyImage} alt="School History" fill className="history-image" />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                [School Image Placeholder]
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="section-divider" />
      
      <section className="features-section container">
        <div className="feature-grid">
          {features.map((feat, i) => (
            <div key={i} className={`glass-panel feature-card ${i === 1 ? 'featured' : ''}`}>
              <div className="icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
              <Link href={feat.linkHref} className="feature-link">{feat.linkText} →</Link>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />
      
      {(recentMembers.length > 0 || recentGallery.length > 0) && (
        <section className="glimpses-section container">
          {recentMembers.length > 0 && (
            <div className="glimpse-block">
              <div className="glimpses-header">
                <h2>Featured Alumni</h2>
                <Link href="/members" className="btn btn-secondary">View All Members</Link>
              </div>
              <div className="members-grid four-col-layout">
                {recentMembers.map((member) => (
                  <MemberCard key={member.slug} member={member} />
                ))}
              </div>
            </div>
          )}

          {recentMembers.length > 0 && recentGallery.length > 0 && (
            <div className="section-divider" style={{ margin: '8rem 0', opacity: 0.1 }} />
          )}

          {recentGallery.length > 0 && (
            <div className="glimpse-block">
              <div className="glimpses-header">
                <h2>Recent Memories</h2>
                <Link href="/gallery" className="btn btn-secondary">View Gallery</Link>
              </div>
              <GalleryGrid items={recentGallery} containerClassName="gallery-masonry glimpses-gallery four-col-layout" />
            </div>
          )}
        </section>
      )}
    </div>
  );
}
