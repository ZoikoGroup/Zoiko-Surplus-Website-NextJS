"use client";
import React, { useState } from "react";
import { Lock, ShieldCheck, Clock, Check } from "lucide-react";

export default function PartnerInquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    organization: "",
    primaryRole: "Select a role",
    whereCanYouOperate: "",
    whatDoesYourOrgDo: "",
    agreed: false,
  });

  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#926016]">
              08
            </span>
            <div className="h-[1px] w-12 bg-[#E5D5C5]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              PARTNER INQUIRY
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            Tell our partnerships team what you do.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#4B5563]">
            Applicants must have a role, region and category that are open. An
            inquiry is not admission.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Left Form Card */}
          <div className="flex flex-col rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm">
            {/* Warning / Privacy Banner */}
            <div className="flex items-center gap-3 rounded-[12px] bg-[#FEF9E7] px-4 py-3 border border-[#F3E8C6] text-[#7A5510]">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3E8C6]/50">
                <Lock className="h-3.5 w-3.5 text-[#926016]" />
              </div>
              <p className="text-[12px] font-medium leading-relaxed">
                Do not include contracts, identity documents, credentials,
                pricing or customer data.
              </p>
            </div>

            {/* Form Fields */}
            <div className="mt-6 flex flex-col gap-5">
              <h3 className="text-[18px] font-bold text-[#111827]">
                Your organization
              </h3>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#374151]">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="h-11 w-full rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#111827] focus:border-[#926016] focus:outline-none"
                  />
                </div>

                {/* Business email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#374151]">
                    Business email
                  </label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        businessEmail: e.target.value,
                      })
                    }
                    className="h-11 w-full rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#111827] focus:border-[#926016] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Organization */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#374151]">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="h-11 w-full rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#111827] focus:border-[#926016] focus:outline-none"
                  />
                </div>

                {/* Primary role */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#374151]">
                    Primary role
                  </label>
                  <select
                    value={formData.primaryRole}
                    onChange={(e) =>
                      setFormData({ ...formData, primaryRole: e.target.value })
                    }
                    className="h-11 w-full rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#111827] focus:border-[#926016] focus:outline-none"
                  >
                    <option value="Select a role">Select a role</option>
                    <option value="Logistics provider">
                      Logistics provider
                    </option>
                    <option value="Redistribution and reuse operator">
                      Redistribution and reuse operator
                    </option>
                    <option value="Recovery operator">Recovery operator</option>
                    <option value="Specialist provider">
                      Specialist provider
                    </option>
                  </select>
                </div>
              </div>

              {/* Where can you operate */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#374151]">
                  Where can you operate?{" "}
                  <span className="text-[#9CA3AF] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.whereCanYouOperate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whereCanYouOperate: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#111827] focus:border-[#926016] focus:outline-none"
                />
                <span className="text-[12px] text-[#6B7280]">
                  Informational only. It does not confer eligibility.
                </span>
              </div>

              {/* What does your organization do */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#374151]">
                  What does your organization do?
                </label>
                <textarea
                  rows={4}
                  value={formData.whatDoesYourOrgDo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatDoesYourOrgDo: e.target.value,
                    })
                  }
                  className="w-full rounded-[12px] border border-[#D1D5DB] bg-white p-4 text-[14px] text-[#111827] focus:border-[#926016] focus:outline-none"
                />
                <div className="flex justify-between items-center text-[12px] text-[#6B7280]">
                  <span>
                    {formData.whatDoesYourOrgDo.length} / 1500 characters. At
                    least 20 are needed.
                  </span>
                </div>
              </div>

              {/* Checkbox agreement */}
              <div className="flex items-start gap-3 mt-1">
                <input
                  type="checkbox"
                  id="privacy-agree"
                  checked={formData.agreed}
                  onChange={(e) =>
                    setFormData({ ...formData, agreed: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 rounded border-[#D1D5DB] text-[#926016] focus:ring-[#926016]"
                />
                <label
                  htmlFor="privacy-agree"
                  className="text-[13px] leading-relaxed text-[#4B5563] cursor-pointer"
                >
                  I have read the privacy notice and agree to be contacted about
                  this inquiry.
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="button"
                  className="rounded-[12px] bg-[#926016] px-6 py-3 text-[14px] font-semibold text-white shadow-sm hover:bg-[#7A5010] transition-colors"
                >
                  Send inquiry
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Info Cards Column */}
          <div className="flex flex-col gap-6">
            {/* Eligibility Notice Card */}
            <div className="flex flex-col rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#FEF6EE] text-[#926016]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827]">
                  Eligibility notice
                </h3>
              </div>

              <div className="mt-5 flex flex-col gap-3.5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F5F0] text-[#1FA88A]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
                    Market, role and category are approved separately.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F5F0] text-[#1FA88A]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
                    An inquiry is not admission.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F5F0] text-[#1FA88A]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
                    No allocation, volume or assignment is promised.
                  </p>
                </div>
              </div>
            </div>

            {/* What to expect Card */}
            <div className="flex flex-col rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#FEF6EE] text-[#926016]">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827]">
                  What to expect
                </h3>
              </div>

              <div className="mt-5 flex flex-col gap-3.5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F5F0] text-[#1FA88A]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
                    You get a reference only after receipt is confirmed.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F5F0] text-[#1FA88A]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
                    No response time is stated here.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F5F0] text-[#1FA88A]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
                    Seller requests use a separate route.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
