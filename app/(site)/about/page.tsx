import { getAboutData } from "@/lib/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import './about.css';

export default async function About() {
  const data = await getAboutData();
  
  if (!data) return <div className="page-header"><div className="container"><h1>Loading...</h1></div></div>;

  return (
    <div className="about-page">
      <div className="page-header decoration-bg">
        <div className="container">

          <h1><span className="text-gradient">{data.title}</span></h1>
          <p>{data.pageSubtitle || "The journey that brought us together and keeps us connected."}</p>
        </div>
      </div>
      
      <div className="container">
        <div className="glass-panel document-container">
          <div className="prose document-content">
            <DocumentRenderer document={data.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
