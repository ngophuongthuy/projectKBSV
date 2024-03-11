import axios from "axios";
import React, { useEffect, useState } from "react";
import { ManagementData } from "src/types/ManagementData";

export default function Table() {
  const [managementData, setManagementData] = useState<Array<ManagementData>>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64f7dd31824680fd217ee404.mockapi.io/api/Management"
        );
        setManagementData(
          response.data.map((item: ManagementData) => ({
            ...item,
            isChecked: false
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      {managementData.map((item: ManagementData, index: number) => (
        <div className="grid grid-cols-12" key={index}>
          <div className="grid col-span-1 grid-cols-2">
            <div className="col-span-1">{item.Ma}</div>
            <div className="col-span-1">{item.Giatri}</div>
          </div>
          <div className="grid col-span-3 grid-cols-3">
            <div className="col-span-1">{item.KL}</div>
            <div className="col-span-1">{item.Tansuat}</div>
            <div className="col-span-1">{item.Laplai}</div>
          </div>
          <div className="grid col-span-3 grid-cols-3">
            <div className="col-span-3">{item.Time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
