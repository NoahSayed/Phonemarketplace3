import React from 'react';

export default function IPhone15VsIPhone16Comparison() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">iPhone 15 vs iPhone 16: A Comprehensive Comparison</h1>
      
      <div className="prose lg:prose-xl">
        <p className="lead mb-6">
          As Apple continues to innovate with its flagship devices, we compare the iPhone 15 and iPhone 16 
          to help you understand the key differences and improvements.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Design and Display</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold">iPhone 15</h3>
            <ul className="list-disc pl-6">
              <li>6.1-inch Super Retina XDR OLED</li>
              <li>Dynamic Island</li>
              <li>1200 nits peak brightness</li>
              <li>Ceramic Shield front</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">iPhone 16</h3>
            <ul className="list-disc pl-6">
              <li>6.2-inch Super Retina XDR OLED</li>
              <li>Enhanced Dynamic Island</li>
              <li>2000 nits peak brightness</li>
              <li>Ceramic Shield front with improved durability</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Performance</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold">iPhone 15</h3>
            <ul className="list-disc pl-6">
              <li>A16 Bionic chip</li>
              <li>6GB RAM</li>
              <li>Neural Engine with 16 cores</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">iPhone 16</h3>
            <ul className="list-disc pl-6">
              <li>A17 Pro chip</li>
              <li>8GB RAM</li>
              <li>Enhanced Neural Engine with 18 cores</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Camera System</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold">iPhone 15</h3>
            <ul className="list-disc pl-6">
              <li>48MP main camera</li>
              <li>12MP ultra-wide</li>
              <li>Photonic Engine</li>
              <li>4K video at 60 fps</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">iPhone 16</h3>
            <ul className="list-disc pl-6">
              <li>50MP main camera</li>
              <li>12MP ultra-wide with larger sensor</li>
              <li>Enhanced Photonic Engine</li>
              <li>8K video recording capability</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Battery Life</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold">iPhone 15</h3>
            <ul className="list-disc pl-6">
              <li>Up to 20 hours video playback</li>
              <li>20W fast charging</li>
              <li>MagSafe charging</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">iPhone 16</h3>
            <ul className="list-disc pl-6">
              <li>Up to 22 hours video playback</li>
              <li>27W fast charging</li>
              <li>Enhanced MagSafe charging</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Other Features</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold">iPhone 15</h3>
            <ul className="list-disc pl-6">
              <li>USB-C port</li>
              <li>5G connectivity</li>
              <li>Face ID</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">iPhone 16</h3>
            <ul className="list-disc pl-6">
              <li>Thunderbolt 4 USB-C port</li>
              <li>Advanced 5G with improved speeds</li>
              <li>Enhanced Face ID with wider angle</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Final Verdict</h2>
        <p>
          The iPhone 16 brings notable improvements in display technology, camera capabilities, and processing power. 
          While the iPhone 15 remains a capable device, the iPhone 16's enhanced features make it a worthy upgrade for 
          those seeking the latest in mobile technology. The decision to upgrade will largely depend on your current 
          device and specific needs for photography, performance, and battery life.
        </p>
      </div>
    </article>
  );
}
