
const NavBar: FC = () => {
    const [pageSwtichButtons, setPageSwitchButtons] = useState(
      InitialPageSwitchButtons
    );
    const [currentButton, setCurrentButton] = useState(
      InitialPageSwitchButtons[0]
    );
  
    const [name, setName] = useState('');
    
    return (
        <div className="d-flex flex-row align-items-center navbar-desktop-right-content">
          {pageSwtichButtons.map((button) => {
                      alt=""
                      className="navbar-page-switch-button-icon"
                    />
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
