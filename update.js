const NavBar: FC = () => {
    const [pageSwtichButtons, setPageSwitchButtons] = useState(
      InitialPageSwitchButtons
    );
dfsdfsd
  
    return (
        <div className="d-flex flex-row align-items-center navbar-desktop-right-content">
          {pageSwtichButtons.map((button) => {
                      className="navbar-page-switch-button-icon"
                      kjkjnkjn
                    />
                    kjnkjn
                    {button.name}
                  </div>
                </Link>
              </div>
            );
          })}
          <NavbarAccountDropdown />
          {/* {this.navbarAccountDropdown()} */}
        </div>
      </div>
    );
  };