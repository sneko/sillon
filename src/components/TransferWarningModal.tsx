import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSessionStorage } from 'usehooks-ts';

interface TransferWarningModalProps {}

export function TransferWarningModal(props: TransferWarningModalProps) {
  const [previouslyDismissed, setPreviouslyDismissed] = useSessionStorage<boolean>('transfer_warning_modal_dismissed', false);
  const [open, setOpen] = useState<boolean>(!previouslyDismissed);

  return (
    <BrowserOnly>
      {() => {
        return (
          <div>
            <Modal
              id="transfer-warning-modal"
              appElement={document.body}
              isOpen={open}
              style={{
                content: {
                  width: '90%',
                  maxWidth: '600px',
                  backgroundColor: 'transparent',
                  padding: 0,
                  border: 0,
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  zIndex: 20000,
                },
              }}
            >
              <Admonition type="caution" title="Le contenu a déménagé !">
                <p className="margin-top--md">
                  Le contenu et le code de ce site <span style={{ fontWeight: 'bold' }}>ont été transférés</span> à l'entité{' '}
                  <Link href="https://beta.gouv.fr/" target="_blank" style={{ textDecorationColor: 'var(--ifm-link-color)' }}>
                    beta.gouv
                  </Link>{' '}
                  et sont maintenant accessibles à l'adresse :<br />
                  <Link
                    href="https://sillon.incubateur.net/"
                    target="_blank"
                    style={{ fontWeight: 'bold', textDecorationColor: 'var(--ifm-link-color)' }}
                  >
                    https://sillon.incubateur.net/
                  </Link>
                </p>
                <p style={{ fontStyle: 'italic' }}>La version historique est toujours consultable ici à titre indicatif.</p>
                <div style={{ textAlign: 'right' }}>
                  <button
                    onClick={() => {
                      setPreviouslyDismissed(true);
                      setOpen(false);
                    }}
                    className="button button--secondary margin-top--sm"
                  >
                    Voir l'ancienne version
                  </button>
                  <Link
                    to="https://sillon.incubateur.net/"
                    target="_self"
                    className="button button--primary margin-top--sm margin-left--md"
                    style={{ textDecorationColor: 'transparent' }}
                  >
                    Voir la nouvelle version
                  </Link>
                </div>
              </Admonition>
            </Modal>
          </div>
        );
      }}
    </BrowserOnly>
  );
}
