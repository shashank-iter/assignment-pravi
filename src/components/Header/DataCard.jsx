import React from "react";
import Image from "next/image";
function DataCard() {
  return (
    <>
      <div className="w-full mx-auto p-2">
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-row justify-between items-center">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Employee photo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="text-sm font-semibold">Nitish Kumar</h2>
              <div className="text-gray-500 text-xs">
                <span className="overflow-hidden">
                  Sales Manager | Sales Dept.
                </span>
              </div>
            </div>
          </div>

          {/* Attendance Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm ">
              <thead>
                <tr className="text-center font-semibold">
                  <th className="px-4 py-1.5 border"></th>
                  <th className="px-4 py-1.5 border">P</th>
                  <th className="px-4 py-1.5 border">A</th>
                  <th className="px-4 py-1.5 border">WO</th>
                  <th className="px-4 py-1.5 border">Σ Bonus/Fine</th>
                  <th className="px-4 py-1.5 border">OT</th>
                  <th className="px-4 py-1.5 border">LT</th>
                  <th className="px-4 py-1.5 border">OT+LT</th>
                  <th className="px-4 py-1.5 border">Final Att.</th>
                  <th className="px-4 py-1.5 border"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="px-4 py-1.5 border text-left font-medium">
                    Cal.
                  </td>
                  <td className="px-4 py-1.5 border font-medium">17.5</td>
                  <td className="px-4 py-1.5 border font-medium">2.5</td>
                  <td className="px-4 py-1.5 border font-medium">11</td>
                  <td className="px-4 py-1.5 border font-medium text-green-600">
                    +2000
                  </td>
                  <td className="px-4 py-1.5 border font-medium">17:32 H</td>
                  <td className="px-4 py-1.5 border font-medium text-red-600">
                    -12:00 H
                  </td>
                  <td className="px-4 py-1.5 border font-medium">05:32 H</td>
                  <td className="px-4 py-1.5 border font-medium">20</td>
                  <td className="px-4 py-1.5 border font-medium text-gray-500 text-xs">
                    Finalised by Rahul
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="px-4 py-1.5 border text-left font-medium">
                    Final
                  </td>
                  <td className="px-4 py-1.5 border font-medium">23.5</td>
                  <td className="px-4 py-1.5 border font-medium">3.5</td>
                  <td className="px-4 py-1.5 border font-medium">4</td>
                  <td className="px-4 py-1.5 border font-medium text-green-600">
                    +400
                  </td>
                  <td className="px-4 py-1.5 border font-medium">12:30 H</td>
                  <td className="px-4 py-1.5 border font-medium text-red-600">
                    -19:00
                  </td>
                  <td className="px-4 py-1.5 border font-medium text-red-600">
                    -06:30 H
                  </td>
                  <td className="px-4 py-1.5 border font-medium">27</td>
                  <td className="px-4 py-1.5 border font-medium text-gray-500 text-xs">
                    Locked by Shriniwas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataCard;
