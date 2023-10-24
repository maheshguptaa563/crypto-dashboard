import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import InfoCard from "../../components/InfoCard";
import { Stack } from "@chakra-ui/react";

const SupportPage = () => {
  return (
    <DashboardLayout>
      <Stack spacing="80px">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              imgUrl="/grid.svg"
              tagText="Contact"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default SupportPage;
