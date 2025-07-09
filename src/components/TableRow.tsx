const statusStyles = {
  "In-process": "bg-yellow-100 text-yellow-700",
  "Need to start": "bg-blue-100 text-blue-700",
  "Complete": "bg-green-100 text-green-700",
  "Blocked": "bg-red-100 text-red-700",
};

const priorityStyles = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-blue-600",
};

type TableRowProps = {
  row: {
    job: string;
    date: string;
    status: keyof typeof statusStyles;
    submitter: string;
    url: string;
    assigned: string;
    priority: keyof typeof priorityStyles;
    due: string;
    value: string | number;
  };
  index: number;
};

export default function TableRow({ row, index }: TableRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50 text-sm">
      <td className="p-2">{index + 1}</td>
      <td className="p-2">{row.job}</td>
      <td className="p-2">{row.date}</td>
      <td className="p-2">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[row.status]}`}>
          {row.status}
        </span>
      </td>
      <td className="p-2">{row.submitter}</td>
      <td className="p-2 underline text-blue-600 cursor-pointer">{row.url}</td>
      <td className="p-2">{row.assigned}</td>
      <td className="p-2 font-medium">
        <span className={priorityStyles[row.priority]}>
          {row.priority}
        </span>
      </td>
      <td className="p-2">{row.due}</td>
      <td className="p-2">{row.value}</td>
    </tr>
  );
}
