import { Link, useFetcher } from "@remix-run/react";
import {
  AddUserIcon,
  AssetsIcon,
  CategoriesIcon,
  CheckmarkIcon,
  CustomFiedIcon,
  TagsIcon,
  UserIcon,
} from "../icons";
import { Button } from "../shared/button";
import Heading from "../shared/heading";
import SubHeading from "../shared/sub-heading";

export default function OnboardingChecklist() {
  const fetcher = useFetcher();
  return (
    <div className="rounded border bg-white px-4 py-5 lg:px-20 lg:py-16">
      <div className="mb-8">
        <Heading
          as="h2"
          className="break-all text-display-xs font-semibold md:text-display-sm"
        >
          Welcome
        </Heading>
        <SubHeading>Complete all tasks to unlock your dashboard.</SubHeading>
      </div>
      <div className="mb-8">
        <div className="mb-4">
          <h4 className=" text-lg font-semibold">Stay organized</h4>
          <p className="text-[14px] text-gray-600">
            Organizing your assets improves overview and unlocks the power of
            our filters and search bar.
          </p>
        </div>
        <ul className="onboarding-checklist -mx-1 xl:flex xl:flex-wrap">
          <li className="completed mx-1 mb-2 xl:w-[49%]">
            <div className="flex items-start justify-between gap-1 rounded border p-4">
              <div className="flex items-start">
                <div className="mr-3 inline-flex items-center justify-center rounded-full border-[5px] border-solid border-primary-50 bg-primary-100 p-1.5 text-primary">
                  <AssetsIcon />
                </div>
                <div className="text-[14px]">
                  <div className="mb-3">
                    <h6 className="font-medium text-gray-700">
                      Create your first asset
                    </h6>
                    <p className=" text-gray-600">
                      Each asset gets it’s own encrypted QR tag.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="#" className=" font-semibold text-gray-600">
                      Learn more
                    </Link>
                    <Button variant="link" to="/categories">
                      New asset
                    </Button>
                  </div>
                </div>
              </div>
              <i className="hidden">
                <CheckmarkIcon />
              </i>
            </div>
          </li>
          <li className="mx-1 mb-2 xl:w-[49%] ">
            <div className="flex items-start justify-between gap-1 rounded border p-4">
              <div className="flex items-start">
                <div className="mr-3 inline-flex items-center justify-center rounded-full border-[5px] border-solid border-primary-50 bg-primary-100 p-1.5 text-primary">
                  <CategoriesIcon />
                </div>
                <div className="text-[14px]">
                  <div className="mb-3">
                    <h6 className="font-medium text-gray-700">
                      Create a custom category
                    </h6>
                    <p className=" text-gray-600">
                      View, edit or delete our default categories and build your
                      own.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="#" className=" font-semibold text-gray-600">
                      Learn more
                    </Link>
                    <Button variant="link" to="/categories">
                      New category
                    </Button>
                  </div>
                </div>
              </div>
              <i className="hidden">
                <CheckmarkIcon />
              </i>
            </div>
          </li>
          <li className="mx-1 mb-2 xl:w-[49%] ">
            <div className="flex items-start justify-between gap-1 rounded border p-4">
              <div className="flex items-start">
                <div className="mr-3 inline-flex items-center justify-center rounded-full border-[5px] border-solid border-primary-50 bg-primary-100 p-1.5 text-primary">
                  <TagsIcon />
                </div>
                <div className="text-[14px]">
                  <div className="mb-3">
                    <h6 className="font-medium text-gray-700">Create a tag</h6>
                    <p className=" text-gray-600">
                      Tags are small pieces of information that can be added to
                      assets.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="#" className=" font-semibold text-gray-600">
                      Learn more
                    </Link>
                    <Button variant="link" to="/tags">
                      New tag
                    </Button>
                  </div>
                </div>
              </div>
              <i className="hidden">
                <CheckmarkIcon />
              </i>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <div className="mb-4">
          <h4 className=" text-lg font-semibold">Team, custody and bookings</h4>
          <p className="text-[14px] text-gray-600">
            Assign custody to your team members. Consider upgrading to Team to
            invite other users to your workspace.
          </p>
        </div>
        <ul className="onboarding-checklist -mx-1 xl:flex xl:flex-wrap">
          <li className="mx-1 mb-2 xl:w-[49%]">
            <div className="flex items-start justify-between gap-1 rounded border p-4">
              <div className="flex items-start">
                <div className="mr-3 inline-flex items-center justify-center rounded-full border-[5px] border-solid border-primary-50 bg-primary-100 p-1.5 text-primary">
                  <UserIcon />
                </div>
                <div className="text-[14px]">
                  <div className="mb-3">
                    <h6 className="font-medium text-gray-700">
                      Add a team member
                    </h6>
                    <p className=" text-gray-600">
                      Track who has custody over an asset by adding your team
                      members to shelf.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="#" className=" font-semibold text-gray-600">
                      Learn more
                    </Link>
                    <Button variant="link" to="/settings/team">
                      New team member
                    </Button>
                  </div>
                </div>
              </div>
              <i className="hidden">
                <CheckmarkIcon />
              </i>
            </div>
          </li>
          <li className="mx-1 mb-2 xl:w-[49%] ">
            <div className="flex items-start justify-between gap-1 rounded border p-4">
              <div className="flex items-start">
                <div className="mr-3 inline-flex items-center justify-center rounded-full border-[5px] border-solid border-primary-50 bg-primary-100 p-1.5 text-primary">
                  <AddUserIcon />
                </div>
                <div className="text-[14px]">
                  <div className="mb-3">
                    <h6 className="font-medium text-gray-700">
                      Assign custody over an asset
                    </h6>
                    <p className=" text-gray-600">
                      View, edit or delete our default categories and build your
                      own.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="#" className=" font-semibold text-gray-600">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <i className="hidden">
                <CheckmarkIcon />
              </i>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <div className="mb-4">
          <h4 className=" text-lg font-semibold">Customize you experience</h4>
          <p className="text-[14px] text-gray-600">
            Optimize your workflow and use Shelf in way that works for you and
            your organizations.
          </p>
        </div>
        <ul className="onboarding-checklist -mx-1 xl:flex xl:flex-wrap">
          <li className="mx-1 mb-2 xl:w-[49%]">
            <div className="flex items-start justify-between gap-1 rounded border p-4">
              <div className="flex items-start">
                <div className="mr-3 inline-flex items-center justify-center rounded-full border-[5px] border-solid border-primary-50 bg-primary-100 p-1.5 text-primary">
                  <CustomFiedIcon />
                </div>
                <div className="text-[14px]">
                  <div className="mb-3">
                    <h6 className="font-medium text-gray-700">
                      Create a custom field
                    </h6>
                    <p className=" text-gray-600">
                      Improve your asset database with custom field types.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="#" className=" font-semibold text-gray-600">
                      Learn more
                    </Link>
                    <Button variant="link" to="/settings/custom-fields">
                      New custom field
                    </Button>
                  </div>
                </div>
              </div>
              <i className="hidden">
                <CheckmarkIcon />
              </i>
            </div>
          </li>
        </ul>
      </div>
      <fetcher.Form
        method="post"
        action="/api/user/prefs/skip-onboarding-checklist"
      >
        <input type="hidden" name="skipOnboardingChecklist" value="skipped" />
        <Button variant="link" type="submit">
          Skip tour, continue to dashboard
        </Button>
      </fetcher.Form>
    </div>
  );
}
