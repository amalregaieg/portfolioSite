export interface CodeSnippet {
  id: string;
  title: string;
  filename: string;
  language: string;
  category: string;
  description: string;
  code: string;
}

export const codeSnippets: CodeSnippet[] = [
  {
    id: "api-platform-resource",
    title: "API Platform Resource & State Processor",
    filename: "src/ApiResource/PractitionerResource.php",
    language: "php",
    category: "Symfony & API Platform",
    description: "PHP 8.3 Attribute-driven API Platform resource declaration with custom DTO provider and state processor.",
    code: `<?php

namespace App\\ApiResource;

use ApiPlatform\\Metadata\\ApiResource;
use ApiPlatform\\Metadata\\Get;
use ApiPlatform\\Metadata\\GetCollection;
use ApiPlatform\\Metadata\\Post;
use App\\State\\PractitionerStateProcessor;
use App\\State\\PractitionerStateProvider;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ApiResource(
    shortName: 'Practitioner',
    operations: [
        new GetCollection(provider: PractitionerStateProvider::class),
        new Get(provider: PractitionerStateProvider::class),
        new Post(
            processor: PractitionerStateProcessor::class,
            security: "is_granted('ROLE_HEALTHCARE_ADMIN')"
        )
    ],
    paginationItemsPerPage: 25
)]
final class PractitionerResource
{
    #[Assert\\NotBlank]
    public ?string $uuid = null;

    #[Assert\\NotBlank]
    #[Assert\\Email]
    public string $email = '';

    #[Assert\\NotBlank]
    public string $rppsIdentifier = '';

    public bool $isVerified = false;
}`
  },
  {
    id: "messenger-handler",
    title: "Async Stripe Webhook Message Handler",
    filename: "src/MessageHandler/StripeWebhookHandler.php",
    language: "php",
    category: "Symfony Messenger & Integrations",
    description: "Asynchronous, idempotent handler for Stripe invoice webhooks utilizing Symfony Messenger & Doctrine transactions.",
    code: `<?php

namespace App\\MessageHandler;

use App\\Message\\StripeWebhookEventMessage;
use App\\Repository\\SubscriptionRepository;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Component\\Messenger\\Attribute\\AsMessageHandler;
use Psr\\Log\\LoggerInterface;

#[AsMessageHandler]
final readonly class StripeWebhookHandler
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SubscriptionRepository $subscriptionRepo,
        private LoggerInterface $logger
    ) {}

    public function __invoke(StripeWebhookEventMessage $message): void
    {
        $eventId = $message->getEventId();
        
        // Ensure idempotency to prevent duplicate charges
        if ($this->subscriptionRepo->hasProcessedEvent($eventId)) {
            $this->logger->info("Stripe event already processed: {id}", ['id' => $eventId]);
            return;
        }

        $this->entityManager->wrapInTransaction(function() use ($message, $eventId) {
            $this->subscriptionRepo->updateStatusFromStripePayload($message->getPayload());
            $this->subscriptionRepo->markEventProcessed($eventId);
        });
    }
}`
  },
  {
    id: "security-voter",
    title: "Domain Access Security Voter",
    filename: "src/Security/Voter/PractitionerRecordVoter.php",
    language: "php",
    category: "Security & Access Control",
    description: "Custom Symfony Security Voter enforcing granular attribute-based access control for medical records.",
    code: `<?php

namespace App\\Security\\Voter;

use App\\Entity\\PractitionerRecord;
use App\\Entity\\User;
use Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface;
use Symfony\\Component\\Security\\Core\\Authorization\\Voter\\Voter;

final class PractitionerRecordVoter extends Voter
{
    public const VIEW = 'PRACTITIONER_VIEW';
    public const EDIT = 'PRACTITIONER_EDIT';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [self::VIEW, self::EDIT], true)
            && $subject instanceof PractitionerRecord;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var PractitionerRecord $record */
        $record = $subject;

        return match ($attribute) {
            self::VIEW => $record->belongsToOrganization($user->getOrganization()),
            self::EDIT => $user->hasRole('ROLE_ADMIN') || $record->isOwnedBy($user),
            default => false,
        };
    }
}`
  }
];
