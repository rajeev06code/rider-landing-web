import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, titleVariants } from '@/lib/utils';
import { Coins, Group, Trophy } from 'lucide-react';

const LoyaltyProgram: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 w-full"
    >
      <motion.h2
        variants={titleVariants}
        className="text-3xl font-bold text-center mb-2"
      >
        Riderly Rewards
      </motion.h2>
      <motion.p
        variants={titleVariants}
        className="text-center text-gray-500 mb-10"
      >
        Unlock exclusive benefits and savings with our new loyalty program!
      </motion.p>

      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          variants={titleVariants}
          className="p-6 text-center border rounded-lg shadow-md flex flex-col items-center m-2"
        >
          <div className="flex justify-center">
            <Coins className="mx-auto h-12 w-12 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold font-poppins">Points System</h3>
          <p className="text-base text-gray-500 font-poppins">अंक प्रणाली</p>
          <p className="text-gray-600 mt-2 font-poppins">
            Earn points for every ride, redeem them for discounts.
          </p>
          <p className="text-gray-600 mt-2 font-poppins">
            हर सवारी के लिए अंक अर्जित करें, छूट के लिए उन्हें भुनाएं।
          </p>
        </motion.div>
        <motion.div
          variants={titleVariants}
          className="p-6 text-center border rounded-lg shadow-md flex flex-col items-center m-2"
        >
          <div className="flex justify-center">
            <Group className="mx-auto h-12 w-12 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold font-poppins">Referral Program</h3>
          <p className="text-base text-gray-500 font-poppins">रेफरल प्रोग्राम</p>
          <p className="text-gray-600 mt-2 font-poppins">
            Invite friends, earn rewards for each successful referral.
          </p>
          <p className="text-gray-600 mt-2 font-poppins">
            मित्रों को आमंत्रित करें, प्रत्येक सफल रेफरल के लिए पुरस्कार अर्जित
            करें।
          </p>
        </motion.div>
        <motion.div
          variants={titleVariants}
          className="p-6 text-center border rounded-lg shadow-md flex flex-col items-center m-2"
        >
          <div className="flex justify-center">
            <Trophy className="mx-auto h-12 w-12 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold font-poppins">Tiered Benefits</h3>
          <p className="text-base text-gray-500 font-poppins">स्तरीय लाभ</p>
          <p className="text-gray-600 mt-2 font-poppins">
            Unlock increasing benefits with Bronze, Silver, and Gold tiers.
          </p>
          <p className="text-gray-600 mt-2 font-poppins">
            ब्रॉन्ज, सिल्वर और गोल्ड स्तरों के साथ बढ़ते लाभों को अनलॉक करें।
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default LoyaltyProgram;
