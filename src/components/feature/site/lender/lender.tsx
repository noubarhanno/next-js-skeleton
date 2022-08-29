import React, { useEffect } from "react";
import { Box, Divider, lighten, Theme, Typography } from "@mui/material";
import CloudQueue from "@mui/icons-material/CloudQueue";
import Mouse from "@mui/icons-material/Mouse";
import Maximize from "@mui/icons-material/Maximize";
import Circle from "@mui/icons-material/Circle";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useConfigContext } from "context/config.context";

const Lender: React.FC = () => {
  const { state } = useConfigContext();
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const explainationVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  return (
    <>
      <Divider />
      <Box
        id="lenders"
        component="div"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        mt={10}
        borderRadius={5}
        p={2}
        sx={{
          backgroundColor:
            state.themeMode === "light"
              ? lighten("#e3e2e6", 0.8)
              : "transparent",
        }}
      >
        <motion.div
          initial="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0.5 },
          }}
          animate={control}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <Typography
            variant="h3"
            color="text.primary"
            fontWeight={600}
            mb={10}
          >
            Lenders
          </Typography>
        </motion.div>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={15}>
          <Box display="flex" flexDirection="column">
            <motion.div
              initial="hidden"
              variants={explainationVariant}
              animate={control}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              <Explaination
                icon={<CloudQueue />}
                title="Tailor your lending strategy"
                descriptions={[
                  "Connect and Upload your securities’ portfolio.",
                  "Customize your lending strategy.",
                  "Set your acceptable collateral.",
                ]}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              variants={explainationVariant}
              animate={control}
              transition={{ duration: 1 }}
              ref={ref}
            >
              <Explaination
                icon={<Mouse />}
                title="Lend in one click"
                descriptions={[
                  "Lend, rerate and recall your securities or all the portfolio faster than ever.",
                  "Request collateral substitutions and control your counterparty risk.",
                ]}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              variants={explainationVariant}
              animate={control}
              transition={{ duration: 1.5 }}
              ref={ref}
            >
              <Explaination
                icon={<Maximize />}
                title="Monitor & maximize your revenue"
                descriptions={[
                  "Analyze your revenue trend through our dashboard and discover insights by counterparty, sector, geography and security",
                  "Implement value lending strategies by prioritizing hard-to-borrow securities.",
                  "Customize and generate internal and regulatory reports.",
                ]}
              />
            </motion.div>
          </Box>
          <Box
            display="flex"
            border="1px solid #cecece"
            borderRadius={5}
            bgcolor="inherit"
            width={400}
            height={600}
          />
        </Box>
      </Box>
    </>
  );
};

export default Lender;

type TExplainationProps = {
  title: string;
  descriptions: string[];
  icon: React.ReactNode;
};
const Explaination: React.FC<TExplainationProps> = ({
  icon,
  descriptions,
  title,
}) => {
  return (
    <Box component="div" mb={5}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center" mb={2}>
          {icon}
          <Typography ml={2} variant="h4" color="text.primary" fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Box component="div" ml={4}>
          {descriptions.map((description) => (
            <Box display="flex" alignItems="center" mb={1}>
              <Circle color="primary" fontSize="small" />
              <Typography
                key={description}
                variant="body1"
                color="text.secondary"
                ml={2}
              >
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
