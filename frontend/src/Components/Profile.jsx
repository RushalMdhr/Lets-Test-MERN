import React from 'react';

const EmployeeProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Start/ profile</h1>
        </div>

        {/* Work Information Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Work Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="bg-gray-100 p-3 rounded">Timesheet & Attendance</div>
            <div className="bg-gray-100 p-3 rounded">Constructs & Documents</div>
            <div className="bg-gray-100 p-3 rounded">Payroll & Benefits</div>
            <div className="bg-gray-100 p-3 rounded">Company assets</div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-6"></div>

        {/* Profile Header */}
        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800">Hang Minh Nguyen</h3>
          <p className="text-gray-600">UI - UX Designer | Product Department</p>
        </div>

        {/* Staff Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-gray-600"><strong>Staff ID:</strong> SJ53862</p>
            <p className="text-gray-600"><strong>Staff Account:</strong> <span className="font-semibold">hangntm1</span></p>
          </div>
          <div>
            <p className="text-gray-600"><strong>Phone number:</strong> 0913 854 235</p>
            <p className="text-gray-600"><strong>Email:</strong> <span className="font-semibold">hangntm@sjlabel.com</span></p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Personal information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Gender</span>
              <span className="font-medium">Female</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Date of birth</span>
              <span className="font-medium">5th March, 1996</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Indentify code</span>
              <span className="font-medium">3234611342</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Hometown</span>
              <span className="font-medium">Hal Duong city</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Nationality</span>
              <span className="font-medium">Vietnam</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Religion</span>
              <span className="font-medium">None</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Language</span>
              <span className="font-medium">Vietnamese, English</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Marital status</span>
              <span className="font-medium">Single</span>
            </div>
          </div>
        </div>

        {/* Education Information */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Education information</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">Bachelor in Management Information System</p>
                <p className="text-gray-600">National Economic University</p>
              </div>
              <span className="text-gray-600">2014-2018</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">Certificate of Graphic Design</p>
                <p className="text-gray-600">FPT Arena University</p>
              </div>
              <span className="text-gray-600">2018-2019</span>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Account information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Bank account</span>
              <span className="font-medium">02520613401</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Account name</span>
              <span className="font-medium">Nguyen Thi Minh Hang</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Bank TPBank Duy Tan</span>
              <span className="font-medium"></span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Tax code</span>
              <span className="font-medium">8456120546</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Insurance code</span>
              <span className="font-medium">8456120546</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;