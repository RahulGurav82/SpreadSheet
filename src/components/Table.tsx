import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Footer from "./Footer";

type TableRowType = {
  job: string;
  date: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "Medium" | "High" | "Low";
  due: string;
  value: string | number;
};
const TOTAL_ROWS = 15;
const tableData: TableRowType[] = [
  {
    job: "Launch social media campaign",
    date: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    job: "Update press kit",
    date: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    job: "Update press kit",
    date: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },

];

export default function Table() {
     const emptyRowCount = TOTAL_ROWS - tableData.length;
  return (
    <div className="overflow-auto border-1 border-gray-300 rounded">
      <table className="min-w-full">
        <TableHeader />
        <tbody>
          {tableData.map((row, index) => (
            <TableRow key={index} row={row} index={index} />
          ))}
        
          {Array.from({ length: emptyRowCount }).map((_, idx) => (
            <tr key={`empty-${idx}`} className="h-10 border-b text-sm text-gray-400">
              <td className="p-2">{tableData.length + idx + 1}</td>
              {Array.from({ length: 9 }).map((_, i) => (
                <td key={i} className="p-2"></td>
              ))}
            </tr>
          ))}
        </tbody>
        
      </table>
      <div className="sticky">
        <Footer />
      </div>
    </div>
  );
}
