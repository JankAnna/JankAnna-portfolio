import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto

//Ícones
import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Android } from "@styled-icons/boxicons-logos/Android";
import { Ios } from "@styled-icons/simple-icons/Ios";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Docker } from "@styled-icons/boxicons-logos/Docker";
import { Wordpress } from "@styled-icons/boxicons-logos/Wordpress";
import { Kalilinux } from "@styled-icons/simple-icons/Kalilinux";
import { Nginx } from "@styled-icons/simple-icons/Nginx";
import { Autodesk } from "@styled-icons/simple-icons/Autodesk";
import { Proxmox } from "@styled-icons/simple-icons/Proxmox";
import { Pfsense } from "@styled-icons/simple-icons/Pfsense";
import { Wireshark } from "@styled-icons/simple-icons/Wireshark";
import { Reactjs } from "@styled-icons/remix-fill/Reactjs";
import { Asana } from "@styled-icons/simple-icons/Asana";
import { Atlassian } from "@styled-icons/simple-icons/Atlassian";
import { Ansys } from "@styled-icons/simple-icons/Ansys";
import { Microsoftoffice } from "@styled-icons/simple-icons/Microsoftoffice";
import { Apacheopenoffice } from "@styled-icons/simple-icons/Apacheopenoffice";
import { Sap } from "@styled-icons/simple-icons/Sap";
import { Powershell } from "@styled-icons/simple-icons/Powershell";
import { Tryhackme } from "@styled-icons/simple-icons/Tryhackme";
import { Hackthebox } from "@styled-icons/simple-icons/Hackthebox";
import { Splunk } from "@styled-icons/simple-icons/Splunk";
import { VisualStudio } from "@styled-icons/boxicons-logos/VisualStudio";
import { Pycharm } from "@styled-icons/simple-icons/Pycharm";
import { Junipernetworks } from "@styled-icons/simple-icons/Junipernetworks";
import { Hackerone } from "@styled-icons/simple-icons/Hackerone";

const TechGrid = styled.footer`
	padding-top: 30px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	grid-column-gap: 5px;
	grid-row-gap: 15px;
	transition: all 0.3s ease;
	width: 100%;
	text-align: center;
	margin: auto;
`;

const Tech = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-width: 100px;
	height: 74px;
	//background-color: ${(props) => props.theme.colors.backgroundSecondary};
	padding: 15px;
	border-radius: 4px;

	svg {
		width: 64px;
		height: 64px;
		color: ${(props) => props.theme.colors.backgroundSVG};
		transition: all 0.3s ease;
	}

	svg:hover {
		color: ${(props) => props.theme.colors.branding};
	}

	.logodark {
		width: 64px;
		height: 64px;
		color: ${(props) => props.theme.colors.backgroundSVG};
		background-color: ${(props) => props.theme.colors.backgroundLOGOdark};
		transition: all 0.3s ease;
		border-radius: 50%;
	}

	.logodark:hover {
		background-color: ${(props) => props.theme.colors.branding};
		border-radius: 25%;
	}

	.logolight {
		width: 64px;
		height: 64px;
		color: ${(props) => props.theme.colors.backgroundSVG};
		background-color: ${(props) => props.theme.colors.backgroundLOGOlight};
		transition: all 0.3s ease;
		border-radius: 50%;
	}

	.logolight:hover {
		background-color: ${(props) => props.theme.colors.branding};
		border-radius: 25%;
	}
`;

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	padding-top: 30px;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

export default function TechsGrid(props) {
	return (
		<TechGrid>
			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<object type="image/svg+xml" data="logo/logoINE.svg" class="logolight">
						logo INE
					</object>
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<object type="image/svg+xml" data="logo/logoWebSecurityAcademy.svg" class="logodark">
						logo WebSecurityAcademy (Burp)
					</object>
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<object type="image/svg+xml" data="logo/logoPortSwigger.svg" class="logodark">
						logo PortSwigger (Burp)
					</object>
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Kalilinux />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Docker />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Wordpress />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Nginx />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Autodesk />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Amazonaws />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Visualstudiocode />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Proxmox />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Mongodb />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Pfsense />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Javascript />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Python />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Nodejs />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Reactjs />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Wireshark />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Html5 />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Git />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Mysql />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Linux />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Windows />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Android />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Ios />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Figma />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Asana />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Adobephotoshop />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Atlassian />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Ansys />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Microsoftoffice />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Apacheopenoffice />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Sap />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Powershell />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Tryhackme />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Hackthebox />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Splunk />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<VisualStudio />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Pycharm />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Junipernetworks />
				</Tech>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Hackerone />
				</Tech>
			</ScrollAnimation>
		</TechGrid>
	);
}
