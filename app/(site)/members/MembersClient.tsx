"use client";

import { useState } from "react";
import Image from "next/image";

import MemberCard from "@/components/MemberCard";

export default function MembersClient({ members }: { members: any[] }) {
  const [search, setSearch] = useState("");

  const filtered = members.filter((m) =>
    m.entry.name.toLowerCase().includes(search.toLowerCase()) || 
    (m.entry.role && m.entry.role.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container members-container">
      <div className="search-wrapper glass-panel">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search members by name or role..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="members-grid">
        {filtered.length === 0 ? (
          <div className="no-results">
            <h3>No members found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        ) : (
          filtered.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))
        )}
      </div>
    </div>
  );
}
