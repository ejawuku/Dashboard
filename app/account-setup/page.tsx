export default function Page() {
  return (
    <div className="h-full">
      <div>
        <div>
          <span>Let's finish setting up your account.</span>
          <span>
            We'll use this information for tax, security and compliance purposes
          </span>
        </div>
        <div>
          <span>Select Your Transaction Volume Tier</span>
          <div>
            <span>Select Yourt Tier Type</span>
            <select name="" id="">
              <option value="" selected disabled></option>
              <option value="1">
                <div>
                  <span>Tier 1</span>
                  <span>
                    Small size entity with an average monthly transaction value
                    less than GHS 5000.00.
                  </span>
                </div>
              </option>
              <option value="2">
                <div>
                  <span>Tier 2</span>
                  <span>
                    Medium size entity with an average monthly transaction value
                    between GHS 5000 and GHS 15,000
                  </span>
                </div>
              </option>
              <option value="3">
                <div>
                  <span>Tier 3</span>
                  <span>
                    Corporate size entity with an average monthly transaction
                    value above GHS 15,000
                  </span>
                </div>
              </option>
            </select>
          </div>
        </div>
        <div>
          <button className="">Continue</button>
        </div>
      </div>
    </div>
  );
}
