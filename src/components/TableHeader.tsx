export default function TableHeader() {
  return (
    <thead className="bg-gray-100 text-sm text-gray-700">
      <tr>
        <th className="p-2 text-left">#</th>
        <th className="p-2 text-left">
          <select className="bg-transparent outline-none">
            <option>Job Request</option>
          </select>
        </th>
        <th className="p-2 text-left">Submitted</th>
        <th className="p-2 text-left">Status</th>
        <th className="p-2 text-left">Submitter</th>
        <th className="p-2 text-left">URL</th>
        <th className="p-2 text-left">Assigned</th>
        <th className="p-2 text-left">Priority</th>
        <th className="p-2 text-left">Due Date</th>
        <th className="p-2 text-left">Est. Value</th>
      </tr>
    </thead>
  );
}
