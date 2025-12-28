import { PlayCircle, Trash2 } from "lucide-react";

const videos = [
       {
              id: 1,
              title: "My First Video",
              size: "24.5 MB",
              uploadedAt: "2025-01-10",
              status: "Active",
       },
       {
              id: 2,
              title: "Product Demo",
              size: "18.2 MB",
              uploadedAt: "2025-01-12",
              status: "Processing",
       },
];

export default function UploadedVideos() {
       return (
              <div className="w-full px-4 sm:px-6 lg:px-10 text-white space-y-6">
                     
                     {/* PAGE HEADER */}
                     <h1 className="text-2xl font-semibold flex items-center gap-2">
                            🎬 Uploaded Videos
                     </h1>

                     {/* MAIN CARD */}
                     <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                            <h2 className="text-xl font-semibold text-black mb-2">
                                   Your Uploaded Videos
                            </h2>
                            <div className="h-[2px] bg-blue-500 mb-6" />

                            {/* Empty State */}
                            {videos.length === 0 && (
                                   <p className="text-gray-500 text-center py-10">
                                          No videos uploaded yet.
                                   </p>
                            )}

                            {/* VIDEO LIST */}
                            <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                                   {videos.map((video) => (
                                          <div
                                                 key={video.id}
                                                 className="border bg-gray-300 rounded-xl p-4 flex flex-col gap4"
                                          >
                                                 {/* Thumbnail */}
                                                 <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
                                                        <PlayCircle size={40} className="text-gray-600" />
                                                 </div>

                                                 {/* Info */}
                                                 <div className="flex-1">
                                                        <h3 className="font-semibold text-black">
                                                               {video.title}
                                                        </h3>

                                                        <p className="text-sm text-gray-600">
                                                               Size: {video.size}
                                                        </p>

                                                        <p className="text-sm text-gray-600">
                                                               Uploaded: {video.uploadedAt}
                                                        </p>

                                                        <span
                                                               className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium
                    ${video.status === "Active"
                                                                             ? "bg-green-100 text-green-700"
                                                                             : "bg-yellow-100 text-yellow-700"
                                                                      }`}
                                                        >
                                                               {video.status}
                                                        </span>
                                                 </div>

                                                 {/* Actions */}
                                                 <div className="flex gap-3 mt-2">
                                                        <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                                                               View
                                                        </button>

                                                        <button className="flex items-center justify-center px-4 py-2 rounded-lg text-red-600 hover:bg-red-50">
                                                               <Trash2 size={18} />
                                                        </button>
                                                 </div>
                                          </div>
                                   ))}
                            </div>
                     </div>
              </div>
       );
}
