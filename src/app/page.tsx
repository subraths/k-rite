"use client";

import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import wixLogo from "@/assets/wix.png";
import shopifyLogo from "@/assets/shopify.png";
import mailchimpLogo from "@/assets/mailchimp.png";
import paypalLogo from "@/assets/paypal.png";
import disneylogo from "@/assets/paris.png";
import intercomlogo from "@/assets/intercom.png";
import google from "@/assets/google.png";
import evernotelogo from "@/assets/social.png";
import microsoftLogo from "@/assets/microsoft.png";
import invision from "@/assets/invision.png";
import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default function Home() {
  const [brands, setBrands] = useState([
    {
      brand: "Wix",
      logo: wixLogo,
      description:
        "Wix is a web and mobile app development company. Wix helps startups and small businesses build their online presence and grow their revenue.",
      members: 3,
      categories: ["Marketing", "Business", "Web"],
      tags: ["wix", "startup", "web", "marketing"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "Shopify",
      logo: shopifyLogo,
      description:
        "Shopify is a online store builder that helps small businesses build their online presence and grow their revenue.",
      members: 5,
      categories: ["Business", "Web"],
      tags: ["shopify", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "MailChimp",
      logo: mailchimpLogo,
      description:
        "MailChimp is a marketing automation service that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["mailchimp", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "PayPal",
      logo: paypalLogo,
      description:
        "PayPal is a payment service that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["paypal", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "Disney",
      logo: disneylogo,
      description:
        "Disney is a streaming service that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["disney", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "Intercom",
      logo: intercomlogo,
      description:
        "Intercom is a chat service that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["intercom", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "Google",
      logo: google,
      description:
        "Google is a search engine that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["google", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "Evernote",
      logo: evernotelogo,
      description:
        "Evernote is a note taking app that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["evernote", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "Microsoft",
      logo: microsoftLogo,
      description:
        "Microsoft is a search engine that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["microsoft", "web", "business"],
      nextMeeting: "2022-01-01",
    },
    {
      brand: "Invision",
      logo: invision,
      description:
        "Invision is a search engine that helps small businesses build their online presence and grow their revenue.",
      members: 10,
      categories: ["Business", "Web"],
      tags: ["invision", "web", "business"],
      nextMeeting: "2022-01-01",
    },
  ]);

  return (
    <main className="p-4 shadow-md rounded-lg w-full border">
      <div className="flex justify-between border-b py-2">
        <h3 className="text-xl font-medium">Products</h3>
        <div className="flex gap-2">
          <div className="relative">
            <input
              placeholder="Search for..."
              className="border py-1 pr-1 pl-8 rounded-lg focus:outline-none focus:border-gray-400"
            />
            <IoSearch className="absolute top-2 left-2" />
          </div>
          <div className="border rounded-lg p-2 flex items-center">
            <HiOutlineChatAlt2 />
          </div>
          <div className="border rounded-lg p-2 flex items-center">
            <CiSettings />
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <div className="flex gap-2">
          <div className="border rounded-lg p-2 flex items-center">
            All brands
          </div>
          <div className="border rounded-lg p-2 flex items-center">Desk</div>
          <div className="border rounded-lg p-2 flex items-center">Tags</div>
          <div className="border rounded-lg p-2 flex items-center">Sort</div>
          <div className="border rounded-lg p-2 flex items-center">Filter</div>
        </div>
        <div className="flex gap-2">
          <div className="border rounded-lg p-2 flex items-center">Meeting</div>
          <div className="border rounded-lg p-2 flex items-center">
            Import/Export
          </div>
        </div>
      </div>

      <div>
        <DataTable columns={columns} data={brands} />
      </div>
    </main>
  );
}
