import ProductsLayout from "@/components/ProductsLayout";

const Documentation = () => {
  return (
    <ProductsLayout>
      <div className="py-6">
        <p>
          Similar to the current Kiewit.DEV site, but includes product specific
          documentation
        </p>

        <p>
          includes:
          <ul>
            <li>Architecture Blueprint</li>

            <li>Link to Landscape Diagram</li>

            <li>
              Will pull in any documenst in the /docs folder of the products git
              repository
            </li>
          </ul>
        </p>
      </div>
    </ProductsLayout>
  );
};

export default Documentation;
