"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BrandInfo = {
  brand: string;
  logo: StaticImageData;
  description: string;
  members: number;
  categories: string[];
  tags: string[];
  nextMeeting: string;
};

export const columns: ColumnDef<BrandInfo>[] = [
  {
    accessorKey: "brand",
    header: "Status",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "members",
    header: "Members",
  },
  {
    accessorKey: "categories",
    header: "Categories",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "nextMeeting",
    header: "Next Meeting",
  },
];
