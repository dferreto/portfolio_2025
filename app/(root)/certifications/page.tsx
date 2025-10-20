import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import CertificationCard from "@/components/certifications/certifications-card";
import { certificationsUnsorted } from "@/config/certifications";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.certifications.metadata.title,
  description: pagesConfig.certifications.metadata.description,
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title={pagesConfig.certifications.title}
      description={pagesConfig.certifications.description}
    >
      <CertificationCard
        certifications={certificationsUnsorted}
      />
    </PageContainer>
  );
}
