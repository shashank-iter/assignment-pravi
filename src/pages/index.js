import Image from "next/image";
import DataCard from "@/components/Header/DataCard";
import MainTable from "@/components/Header/Tables/mainTable";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DataCard />
      <MainTable />
    </div>
  );
}
