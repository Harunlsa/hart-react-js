import { BsInfoCircle } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ReactMarkdown from "react-markdown";

import { products } from "../data/products";

const AdditionalInfo = ({ category }) => {
  const categoryData = products[category] || null;

  const popover = (
    <Popover
      id="popover-basic"
      style={{ maxWidth: "75%", overflowY: "scroll", height: "60vh" }}
    >
      <Popover.Header as="h3">
        More info: {category[0].toUpperCase() + category.slice(1)}
      </Popover.Header>
      <Popover.Body>
        {categoryData.additionalInfo ? (
          <ReactMarkdown>{categoryData.additionalInfo}</ReactMarkdown>
        ) : (
          "No info available"
        )}
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger
      trigger={["click", "focus"]}
      placement="bottom"
      overlay={popover}
      rootClose
    >
      {/* <Button variant="link" size="sm">
        <BsInfoCircle
          strokeWidth={0.6}
          size={14}
          color="white"
          overflow={"visible"}
        />
      </Button> */}
      {categoryData.additionalInfo !== "No additional information" ? (
        <Button
          variant="link"
          size="sm"
          aria-label={`More information about ${category}`}
        >
          <BsInfoCircle
            strokeWidth={0.6}
            size={14}
            color="white"
            overflow={"visible"}
            aria-hidden="true"
          />
        </Button>
      ) : (
        <></>
      )}
    </OverlayTrigger>
  );
};

export default AdditionalInfo;
