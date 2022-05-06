import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <br />
      <Accordion
        margin={100}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Orders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>1. How do I place an order?</strong>
            <br />
            <small>
              First step is to register with us as a member by clicking here.
              All you need to do now is browse! You can search for something
              specific by using the search bar or if you're looking for a
              particular type of item you can browse by category located along
              the top of the page.
            </small>
            <br />
            <br />

            <strong>2. What do I do if there's a problem with my order?</strong>
            <br />
            <small>
              Our customer service representatives are more than happy to help
              you. Email us at info@stylecode.com or call 65123456.
            </small>
            <br />
            <br />
            <strong>
              3. I couldn't proceed with payment and my order status is Pending.
              How do I proceed?
            </strong>
            <br />
            <small>
              Kindly contact us immediately via email, call or live chat and
              we'll assist in canceling your order so that you can place a new
              one.
            </small>
            <strong>
              <br />
              <br />
              4. Why was my order canceled?
            </strong>
            <br />
            <small>
              In most cases, orders are automatically canceled if we do not
              receive payments from you via the payment gateways. However, if
              the amount has been deducted from your bank account, kindly email
              us at info@stylecode.com and we'll sort it out right away!
            </small>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General Enquiries
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>1. Do you restock items?</strong>
            <br />
            <small>
              Tbh, we wish we could let you know ASAP! We’re happy that you’d
              want to look LIT with our items. Some of our items that are high
              in demand will usually be restocked. We will announce restocks in
              our newsletters as well as on our social media, so do be sure to
              keep them on a look out! Or stalk us anytime, we don’t mind.
            </small>
            <br />
            <br />
            <strong>
              2. Can you let me know when an item has been restocked?
            </strong>
            <br />
            <small>
              We would love to! But it would take too long for us to get back to
              each and every one of you. Instead, we’d suggest you subscribe to
              our newsletter and follow us on Instagram as we will announce our
              restocks over there. It will also mean that you will get updated
              quicker and not miss out on any of the restocks!
            </small>
            <br />
            <br />
            <strong>
              3. What are your standard terms & conditions for sales using
              codes?{" "}
            </strong>
            <br />
            <small>
              - For registered #STYLECODE members only. - Applicable only once
              within a single receipt. - Discount codes cannot be combined. -
              Cash vouchers and store credit are not exchangeable for cash. -
              Stylecode has the right to amend their terms & conditions at any
              time.
            </small>
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Exchange & Refund/Return{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>1. What is your Returns & Exchange Policy?</strong>
            <br />
            <small>
              We will accept returns within 30 days upon order receival for a
              full refund or an exchange provided that: Item is unworn,
              unaltered, unwashed and in its original packaging with the label
              still attached Item is not in the non-returnable category
            </small>
            <br />
            <br />
            <strong>2. How do I return items?</strong>
            <br />
            <small>
              Login to your account and locate order number in My Account and
              click Request Return (App)/Return Exchange (Web). Fill in option
              of Return/Exchange for the item and submit Return Request. Repack
              item in original packaging. Email shipping fee receipt to
              info@stylecode.com for store credit reimbursement and tracking
              record.
            </small>
            <br />
            <br />
            <strong>
              3. How long do will it take for me to get my refund back?
            </strong>
            <br />
            <small>
              Once parcel has reached us, we take 1-3 working days to process
              your return (excluding Refund Processing Time). All return &
              refund notifications shall be sent via E-mail. All returns and
              exchanges are in exchange of Store Credit
            </small>{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Try Before You Buy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            What Is TBYB? TBYB is a service where you can try an item before
            buying by placing an order online and delivered to our physical or
            pop-up stores. So if you’re unsure if the size fits, you can use
            this service and you can try the items and have a mini fashion show
            in our fitting room! If it isn’t a perfect match, you can return it
            back to our store associates and not have to fork out a fee. If
            you’d like to continue to purchase any items, you can make your
            payment at the store you’re at.
            <br />
            <br />
            <strong>1. Which items can I try before I buy?</strong>
            <br />
            <small>
              Once parcel has reached us, we take 1-3 working days to process
              your return (excluding Refund Processing Time). All return &
              refund notifications shall be sent via E-mail. All returns and
              exchanges are in exchange of Store Credit
            </small>{" "}
            <br />
            <br />
            <strong>
              2. How do I make payment for the items I want to keep?
            </strong>
            <br />
            <small>
              - Cash - Credit or debit card - GrabPay - Store credits and reward
              points
            </small>
            <br />
            <br />
            <strong>3. Can I return my TBYB items?</strong>
            <br />
            <small>
              Yes! You can return your item in exchange for a refund in the form
              of store credits or as an exchange with another item at any of our
              physical stores within 7 days of receipt.
            </small>
            <br />
            <br />
            <strong>
              4. Can I combine items that are eligible for TBYB with other
              items?
            </strong>
            <br />
            <small>
              We’re glad that you love our items but unfortunately you will need
              to place a separate order for the items that are not listed under
              the TBYB category. Fret not! You may opt for store pickup and
              collect the items whilst you try on the items from your TBYB
              order.
            </small>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
