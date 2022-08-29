import React, { useEffect } from "react";
import { Box, Divider, lighten, Theme, Typography } from "@mui/material";
import CloudQueue from "@mui/icons-material/CloudQueue";
import BlurOn from "@mui/icons-material/BlurOn";
import MonitorHeart from "@mui/icons-material/MonitorHeart";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useConfigContext } from "context/config.context";
import Circle from "@mui/icons-material/Circle";

const Borrower: React.FC = () => {
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
        id="borrowers"
        component="div"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        mt={10}
        borderRadius={5}
        p={2}
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
            Borrowers
          </Typography>
        </motion.div>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={15}>
          <Box
            display="flex"
            border="1px solid #cecece"
            borderRadius={5}
            bgcolor="inherit"
            width={400}
            height={600}
          />
          <Box display="flex" flexDirection="column">
            <motion.div
              initial="hidden"
              variants={explainationVariant}
              animate={control}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              <Explaination
                icon={<BlurOn />}
                title="Locate faster"
                descriptions={[
                  "Discover and connect with new institutional lenders",
                  "Broadcast your indication of interest  in securities to lending counerparts",
                  "Initiate, Negotiate and confirm transactions for multiple securities in one click",
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
                icon={<CloudQueue />}
                title="Optimize your borrowing costs"
                descriptions={[
                  "Rerate or return securities to improve your borrowing costs",
                  "Request collateral substitutions to optimize your pledging strategy",
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
                icon={<MonitorHeart />}
                title="Monitor your borrowing costs"
                descriptions={[
                  "Discover the cheapest borrowing pools",
                  "Monitor historical borrowing rate at the security level",
                  "Customize and generate regulatory reports for your compliance team",
                ]}
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Borrower;

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
              <Circle color="secondary" fontSize="small" />
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
