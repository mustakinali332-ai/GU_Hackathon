import { notFound } from "next/navigation";
import Link from "next/link";
import { safariPackages, getSafariBySlug } from "@/data/safaris";
import SafariBookingWidget from "@/components/SafariBookingWidget";
import { 
  Compass, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  Check, 
  X, 
  ArrowLeft, 
  ChevronRight,
  Binoculars,
  Navigation
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return safariPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);

  if (!safari) {
    return { title: "Safari Not Found | TravelMateNE" };
  }

  return {
    title: `${safari.parkName} ${safari.vehicleType} Booking | TravelMateNE`,
    description: `Book official ${safari.vehicleType} at ${safari.parkName} (${safari.rangeName}). Starting at ₹${safari.pricePerVehicle}. Check dawn timings, forest permits, and wildlife sightings.`,
  };
}

export default async function SafariDetailPage({ params }: Props) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);

  if (!safari) {
    notFound();
  }

  const otherSafaris = safariPackages
    .filter((s) => s.id !== safari.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 overflow-x-auto">
            <Link href="/" className="hover:text-emerald-600 shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/safari" className="hover:text-emerald-600 shrink-0">Safari Booking</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-gray-700 shrink-0 font-medium">{safari.parkName}</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-emerald-700 font-semibold truncate">{safari.vehicleType}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[380px] sm:h-[460px] bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${safari.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-black/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          <Link
            href="/safari"
            className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white mb-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/20 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Safaris
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
              {safari.vehicleType}
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
              {safari.state} • {safari.district}
            </span>
            <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-semibold rounded-full">
              Season: {safari.bestSeason}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            {safari.parkName}
          </h1>
          <p className="text-lg sm:text-xl text-emerald-300 font-medium">
            {safari.rangeName} Circuit
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/15 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <span className="text-[11px] text-gray-300 block">Start Timings</span>
              <span className="text-sm font-bold text-white block mt-0.5">
                {safari.timings[0]?.split("-")[0]?.replace("Slot 1: ", "").replace("Batch 1: ", "") || "Early Dawn"}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <span className="text-[11px] text-gray-300 block">Duration</span>
              <span className="text-sm font-bold text-white block mt-0.5">{safari.duration}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <span className="text-[11px] text-gray-300 block">Distance from Guwahati</span>
              <span className="text-sm font-bold text-emerald-300 block mt-0.5">{safari.distanceFromGuwahati}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <span className="text-[11px] text-gray-300 block">Vehicle Capacity</span>
              <span className="text-sm font-bold text-white block mt-0.5">{safari.capacity}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left 2 Columns: Detailed Guide & Rules */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Compass className="w-6 h-6 text-emerald-600" /> Safari Overview &amp; Experience
              </h2>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                {safari.description}
              </p>

              {/* Wildlife Badges */}
              <div>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Target Wildlife Sightings on this Route
                </h3>
                <div className="flex flex-wrap gap-2">
                  {safari.wildlifeHighlights.map((animal) => (
                    <span
                      key={animal}
                      className="px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-emerald-100"
                    >
                      <Binoculars className="w-3.5 h-3.5 text-emerald-600" /> {animal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timings & Dawn Slots */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-emerald-600" /> Official Forest Batches &amp; Reporting
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {safari.timings.map((timing, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <span className="text-xs font-bold text-emerald-700 block uppercase mb-1">
                      Batch {i + 1}
                    </span>
                    <span className="text-base font-bold text-gray-900 block">{timing}</span>
                    <span className="text-xs text-gray-500 mt-1 block">
                      Mandatory reporting at Range Office 30 minutes before slot.
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" /> Package Inclusions &amp; Exclusions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" /> What is Included
                  </h3>
                  <ul className="space-y-2.5">
                    {safari.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-600" /> What is Excluded
                  </h3>
                  <ul className="space-y-2.5">
                    {safari.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Forest Department Rules */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-amber-950 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> Mandatory Forest Department Guidelines
              </h2>
              <p className="text-xs text-amber-800 mb-4">
                Assam Forest Department enforces strict wildlife protection guidelines. Non-compliance invites spot fines and cancellation.
              </p>
              <ul className="space-y-2">
                {safari.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Reach & Transit Guidance */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Navigation className="w-6 h-6 text-emerald-600" /> How to Reach {safari.parkName}
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>By Air / Rail from Guwahati:</strong> {safari.distanceFromGuwahati}. You can hire outstation cabs or catch morning intercity buses from ISBT Betkuchi / Paltan Bazar Guwahati.
                </p>
                <p>
                  <strong>Stay Options:</strong> Forest IB (Inspection Bungalows), Assam Tourism Prashanti Lodges, and private eco-resorts are situated right outside the range check-post.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Booking Widget */}
          <div className="lg:col-span-1">
            <SafariBookingWidget safari={safari} />
          </div>

        </div>

        {/* Other Recommended Safaris */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Other Northeast Safaris</h2>
              <p className="text-sm text-gray-600">Discover more wildlife circuits across Assam</p>
            </div>
            <Link href="/safari" className="text-emerald-600 font-semibold text-sm hover:underline">
              View All Safaris →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherSafaris.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/safari/${pkg.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url('${pkg.image}')` }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold rounded-full">
                        {pkg.vehicleType}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      {pkg.parkName}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-600 transition-colors">
                      {pkg.rangeName}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{pkg.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">From ₹{pkg.pricePerVehicle.toLocaleString()}</span>
                  <span className="text-xs font-bold text-emerald-600">Book Slot →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
