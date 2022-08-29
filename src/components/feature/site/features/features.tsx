import React, { useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useConfigContext } from "context/config.context";
import { EThemeMode } from "interfaces";
import ControlPoint from "@mui/icons-material/ControlPoint";
import Scale from "@mui/icons-material/Scale";
import AttachMoney from "@mui/icons-material/AttachMoney";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features: React.FC = () => {
  const { state } = useConfigContext();
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Box mt={6} id="features">
      <Typography
        textAlign="center"
        variant="h3"
        color="text.primary"
        fontWeight={600}
        mb={10}
      >
        Our Features
      </Typography>
      <Box
        component="div"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={3}
        my={7}
      >
        <motion.div
          initial="hidden"
          variants={boxVariant}
          animate={control}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <FeatureSection
            icon="trade"
            themeMode={state.themeMode}
            highlighted
            title="Trade Smarter"
            description="Negotiate your transactions, monitor your positions and unlock valuable market analytics and insights. Whether you are looking for additional revenue streams on your assets under management, or to get access to security borrowing opportunities, we got you covered."
          />
        </motion.div>
        <motion.div
          initial="hidden"
          variants={boxVariant}
          animate={control}
          transition={{ duration: 1 }}
          ref={ref}
        >
          <FeatureSection
            icon="control"
            themeMode={state.themeMode}
            title="Be in Control"
            description="Lend on your conditions, Define the right collateral and Broadcast your executable inventory to preferred borrowers only. Manage efficiently your open positions lifecycle through Recalls, Returns, Re-rates and many other features."
          />
        </motion.div>
        <motion.div
          initial="hidden"
          variants={boxVariant}
          animate={control}
          transition={{ duration: 1.5 }}
          ref={ref}
        >
          <FeatureSection
            icon="scale"
            themeMode={state.themeMode}
            highlighted
            title="Digitalize & Scale"
            description="Set your securities lending and borrowing program on auto-pilot with our cloud-native SaaS platform. Go-Live in days and not months or years is only possible with the Secfinity high velocity operating model and never miss an opportunity again."
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Features;

type TFeatureSectionProps = {
  highlighted?: boolean;
  title?: string;
  description?: string;
  themeMode?: EThemeMode;
  icon?: "control" | "trade" | "scale";
};
const FeatureSection: React.FC<TFeatureSectionProps> = ({
  highlighted,
  title,
  description,
  themeMode,
  icon,
}) => {
  const SelectedIcon = useMemo(() => {
    switch (icon) {
      case "control":
        return ControlPoint;
      case "scale":
        return Scale;
      default:
        return AttachMoney;
    }
  }, [icon]);
  return (
    <Box
      borderRadius={3}
      overflow="hidden"
      display="flex"
      minHeight={300}
      boxShadow={
        themeMode === "light"
          ? "1px 1px 10px rgb(0 0 0 / 10%)"
          : "1px 1px 10px rgb(0 0 0 / 50%)"
      }
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        p={4}
        sx={(theme: Theme) => ({
          borderTop: `8px solid ${
            highlighted
              ? theme.palette.primary.light
              : theme.palette.secondary.light
          }`,
        })}
      >
        <SelectedIcon
          sx={{ width: 40, height: 40, mb: 2 }}
          color={highlighted ? "primary" : "secondary"}
        />
        {title && (
          <Typography variant="h5" color="text.primary" fontWeight={600}>
            {title}
          </Typography>
        )}
        {description && (
          <Typography
            textAlign="center"
            mt={3}
            variant="body2"
            color="text.secondary"
            fontWeight={600}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
