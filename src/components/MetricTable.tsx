interface IMetricTableProps<T> {
  columns: Array<{
    title: string;
    objectKey: keyof T;
    wrap? : boolean
  }>;
  data: Array<T>;
}

const MetricTable = <T,>(props: IMetricTableProps<T>) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white  shadow  mt-5">
    <table className="min-w-full divide-y divide-gray-300 ">
      <thead className="bg-gray-50">
        <tr>
          {props.columns.map((c) => (
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              {c.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {props.data.map((d) => (
          <tr>
            {props.columns.map((c) => (
              <td className={`${c.wrap ? "break-normal" : "whitespace-nowrap"}  px-3 py-4 text-sm text-gray-500`}>
                {d[c.objectKey] as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table></div>
  );
};

export default MetricTable;
export type {IMetricTableProps}
