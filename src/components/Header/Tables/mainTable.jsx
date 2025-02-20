import React from "react";
import {
  ChevronDown,
  Clock,
  Link,
  MapPin,
  MessageSquare,
  MoreVertical,
  User,
} from "lucide-react";
import { data } from "@/data";

function MainTable() {
  return (
    <div>
      <div className="w-full overflow-x-auto px-2">
        <table className="w-full border text-xs bg-white">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-3  font-medium border text-center">
                Date
              </th>
              <th className="py-2 px-3  font-medium border text-center">
                Time planned + WH
              </th>
              <th className="py-2 px-3  font-medium border text-center">
                Actual Time
              </th>
              <th className="py-2 px-3  font-medium border text-center">
                Fine/Bonus
              </th>
              <th className="py-2 px-3  font-medium border text-center">
                Error
              </th>
              <th className="py-2 px-3  font-medium border text-center">
                Cal. Att.
              </th>
              <th className="py-2 px-3  font-medium border text-center">
                Final Att.
              </th>
              <th className="py-2 px-3  font-medium border text-center"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3 flex items-center gap-x-1 ">
                  <div className="font-medium text-xs">{row.date.day}</div>
                  <div className="font-medium">{row.date.date}</div>
                </td>
                <td className="py-2 px-3 text-gray-600 font-medium border">
                  {row.timePlanned}
                </td>
                <td className="py-2 px-3 border">
                  {typeof row.actualTime === "string" ? (
                    <span className="text-gray-600 font-medium">
                      {row.actualTime}
                    </span>
                  ) : (
                    <div>
                      <span className="text-gray-600 font-medium">
                        {row.actualTime.time.split(" ")[0]}{" "}
                        {row.actualTime.time.split(" ")[1]}
                        {row.actualTime.time.split(" ")[2]}
                        <span
                          className={`${
                            row.actualTime.isLate === true ? "text-red-500" : ""
                          } ${
                            row.actualTime.isLate === false
                              ? "text-yellow-600"
                              : ""
                          } ${
                            row.actualTime.isLate === "ontime"
                              ? "text-gray-900"
                              : ""
                          }`}
                        >
                          {row.actualTime.time.split(" ")[3]}{" "}
                          {row.actualTime.time.split(" ")[4]}
                        </span>
                      </span>
                      {row.actualTime.isLate === true && (
                        <span className="text-red-500 font-medium">
                          {" "}
                          • {row.actualTime.hours}
                        </span>
                      )}
                      {row.actualTime.isLate === false && (
                        <span className="text-yellow-500 font-medium">
                          {" "}
                          • {row.actualTime.hours}
                        </span>
                      )}
                      {row.actualTime.isLate === "ontime" && (
                        <span className="text-gray-900 font-medium">
                          {" "}
                          • {row.actualTime.hours}
                        </span>
                      )}
                    </div>
                  )}
                </td>
                <td className="py-2 px-3 border font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 w-1/3">{row.fine}</span>
                    <span className="text-gray-400 text-xs line-through w-1/3">
                      {row.oldFine}
                    </span>
                    <button variant="ghost" size="icon" className="h-6 w-6 ">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </td>
                <td className="py-2 px-3 border font-medium">
                  <div className="flex gap-1 text-red-500">
                    {row.errors.includes("location") && (
                      <MapPin className="h-4 w-4" />
                    )}
                    {row.errors.includes("time") && (
                      <Clock className="h-4 w-4" />
                    )}
                    {row.errors.includes("user") && (
                      <User className="h-4 w-4" />
                    )}
                  </div>
                </td>
                <td className="py-2 px-3 border font-medium">
                  <span className="text-green-500 text-center">
                    {row.calAtt}
                  </span>
                </td>
                <td className="py-2 px-3 border ">
                  <div className="flex items-center gap-1 font-medium">
                    <span className="w-5/12">{row.finalAtt}</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                    {row.actualTime.isLate === true && (
                      <span className="text-xs bg-red-100 rounded-md px-1 py-1">
                        {row.actualTime.hours}
                      </span>
                    )}
                    {row.actualTime.isLate === false && (
                      <span className="text-xs bg-yellow-100 text-yellow-500 rounded-md px-1 py-1">
                        {row.actualTime.hours}
                      </span>
                    )}
                    {row.actualTime.isLate === "ontime" && (
                      <span className="text-xs bg-gray-100  rounded-md px-1 py-1">
                        {row.actualTime.hours}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-2 px-3 border font-medium">
                  <div className="flex items-center gap-2 text-xs text-gray-900">
                    <div className="flex items-center gap-1">
                      <Link className="h-3 w-3" />
                      <span>3</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>3</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-900" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainTable;
