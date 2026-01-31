import React from "react";

// IMPORT IMAGES (ONLY PATHS — NO JSX HERE)
import heroImg from "../../assets/blog-img8.webp";

import side1 from "../../assets/blog-img10.webp";
import side2 from "../../assets/blog-img11.webp";

import card1 from "../../assets/card-1.webp";
import card2 from "../../assets/card-12.webp";
import card3 from "../../assets/fire.jpg";
import card4 from "../../assets/h2_about_img01.jpg";

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* HEADER */}
      <h2 className="text-3xl font-bold mb-8">Blog Details</h2>

      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT HERO */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
          <img
            src={heroImg}
            alt=""
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-6 left-6 text-white max-w-lg">
            <p className="text-sm mb-2">25 July 2024</p>

            <h3 className="text-2xl font-semibold leading-snug mb-3">
              Accusamus et justo odio dignissimos ducimus qui blanditiis.
            </h3>

            <div className="flex gap-6 text-sm opacity-90">
              <span>Mark Lecno</span>
              <span>02 Hits</span>
              <span>598 Comments</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {[side1, side2].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 flex gap-4"
            >
              <img
                src={img}
                alt=""
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div>
                <p className="text-gray-400 text-sm mb-1">
                  0{i + 2} January 2024
                </p>

                <h4 className="font-semibold leading-snug mb-1">
                  Perspiciatis unde omnis iste natus
                </h4>

                <p className="text-sm text-gray-500">
                  inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 mt-14">
        {[card1, card2, card3, card4].map((img, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={img}
              alt=""
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-6 text-center">
              <p className="text-sm text-gray-400 mb-3">
                9 April 2024 | by Admin | 0 Hits
              </p>

              <h3 className="font-semibold leading-relaxed">
                A huge part of it is the incomparable beauty you can encounter every day.
              </h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogPage;
