
import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, titleVariants } from '@/lib/utils';
import { Coins, Users, Award, Gift } from 'lucide-react'; // Changed Group to Users, Trophy to Award, added Gift

const LoyaltyProgram: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const loyaltyFeatures = [
    {
      icon: <Coins className="mx-auto h-14 w-14 text-primary" />,
      title: "Earn Riderly Points",
      titleHi: "राइडरली पॉइंट्स कमाएं",
      description: "Collect points for every ride you take. More rides mean more points!",
      descriptionHi: "हर सवारी पर पॉइंट्स जमा करें। ज़्यादा राइड्स, ज़्यादा पॉइंट्स!"
    },
    {
      icon: <Gift className="mx-auto h-14 w-14 text-primary" />, // Changed icon
      title: "Redeem for Discounts",
      titleHi: "छूट के लिए रिडीम करें",
      description: "Use your accumulated points to get exciting discounts on future rides.",
      descriptionHi: "अपने जमा किए गए पॉइंट्स का उपयोग भविष्य की राइड्स पर रोमांचक छूट पाने के लिए करें।"
    },
    {
      icon: <Users className="mx-auto h-14 w-14 text-primary" />,
      title: "Refer & Earn Big",
      titleHi: "रेफर करें और बड़ा कमाएं",
      description: "Invite friends to Riderly. Both you and your friends get rewards!",
      descriptionHi: "दोस्तों को राइडरली पर आमंत्रित करें। आप और आपके दोस्त, दोनों को इनाम मिलेगा!"
    },
    {
      icon: <Award className="mx-auto h-14 w-14 text-primary" />,
      title: "Exclusive Tier Benefits",
      titleHi: "विशेष टियर लाभ",
      description: "Unlock special perks as you move up our loyalty tiers: Bronze, Silver, & Gold.",
      descriptionHi: "हमारे लॉयल्टी टियर्स: ब्रॉन्ज, सिल्वर, और गोल्ड में आगे बढ़ते हुए विशेष लाभ अनलॉक करें।"
    }
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 md:py-24 w-full bg-muted/20"
    >
      <motion.h2
        variants={titleVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight"
      >
        Riderly Rewards: Ride More, Save More!
      </motion.h2>
      <motion.p
        variants={titleVariants}
        className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
      >
        राइडरली रिवार्ड्स: ज़्यादा राइड करें, ज़्यादा बचाएं! Unlock exclusive benefits, discounts, and special offers with our loyalty program.
      </motion.p>

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {loyaltyFeatures.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className="p-8 text-center border border-primary/10 rounded-xl shadow-lg hover:shadow-xl bg-card flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
          >
            <div className="p-4 bg-primary/10 rounded-full mb-6 inline-block shadow-sm">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-2xl font-semibold">{feature.title}</h3>
            <p className="text-lg text-secondary font-medium mb-3">{feature.titleHi}</p>
            <p className="text-muted-foreground text-base leading-relaxed">
              {feature.description}
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              {feature.descriptionHi}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default LoyaltyProgram;
