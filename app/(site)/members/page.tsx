import { getMembers, getMembersPageData } from "@/lib/keystatic";
import MembersClient from "./MembersClient";
import "./members.css";

export default async function MembersPage() {
  const members = await getMembers();
  const pageData = await getMembersPageData();

  return (
    <div className="members-page">
      <div className="page-header decoration-bg">
        <div className="container">

          <h1><span className="text-gradient">{pageData?.title || "Members Directory"}</span></h1>
          <p>{pageData?.pageSubtitle || "Search and connect with all verified batch mates."}</p>
        </div>
      </div>

      <MembersClient members={members} />
    </div>
  );
}
