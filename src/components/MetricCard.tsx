import * as Icons from "@/components/Icons";


interface IMetricCardProps {
    title: string;
    value: number;
    units: string;

    increasePercent: number;


}
const MetricCard = (props: IMetricCardProps) => {

    return (
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt className="text-base font-normal text-gray-900">
            {props.title}
        </dt>
        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
          <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
            {props.value}
            <span className="ml-2 text-sm font-medium text-gray-500">
              {props.units}
            </span>
          </div>

          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
            <Icons.UpArrow />
            <span className="sr-only"> Increased by </span>
            {props.increasePercent}%
          </div>
        </dd>
      </div>
    )

}


export default MetricCard;